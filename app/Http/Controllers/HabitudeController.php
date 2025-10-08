<?php

namespace App\Http\Controllers;

use Exception;
use Inertia\Inertia;
use App\Models\Habitude;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreHabitudeRequest;
use App\Http\Requests\UpdateHabitudeRequest;
use Carbon\Carbon;
use Illuminate\Http\Request;

class HabitudeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //La date du jour
        $aujourdhui = Carbon::today();

        // Recuperer les 14 derniers jours
        $dates = collect(range(0, 13))
            ->map(fn($i) => $aujourdhui->copy()->subDays($i)->format("d/m/Y"))
            ->values();

        return Inertia::render("habitude/Index", [
            "habitudes" => Habitude::where("user_id", Auth::user()->id)->get(),
            "dates" => $dates,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {}

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreHabitudeRequest $request)
    {
        try {
            $data = $request->validated();
            $data["user_id"] = Auth::user()->id;

            Habitude::create($data);
        } catch (Exception $e) {
            return response()->json($e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Habitude $habitude)
    {
        return Inertia::render("habitude/Show", ["habitude" => $habitude]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Habitude $habitude)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateHabitudeRequest $request, Habitude $habitude)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Habitude $habitude)
    {
        //
    }

    public function checkin(Habitude $habitude, Request $request)
    {
        // Verifier si l'utilisateur n'a jamais fait un checkin pour cette habitude à la date donnée
        if (! $habitude->checkins()->where("user_id", Auth::user()->id)->wherePivot("date", Carbon::parse($request->date))->exists())
        {
            // Enregistrer le checkin
            $habitude->checkins()->attach(Auth::user()->id, ["date" => Carbon::parse($request->date), "estAccompli" => true]);
        }
        else
        {
            // Mettre à jour le checkin existant (toggle)
            if($habitude->checkins()->where("user_id", Auth::user()->id)->wherePivot("date", Carbon::parse($request->date))->first()->pivot->estAccompli)
            {
                $habitude->checkins()->where("user_id", Auth::user()->id)->wherePivot("date", Carbon::parse($request->date))->updateExistingPivot(AUth::user()->id, ["estAccompli" => false]);
            }
            else
            {
                $habitude->checkins()->where("user_id", Auth::user()->id)->wherePivot("date", Carbon::parse($request->date))->updateExistingPivot(AUth::user()->id, ["estAccompli" => true]);
            }
        }

        return redirect()->route("habitudes.index");
            
    }
}
