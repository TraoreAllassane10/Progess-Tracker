<?php

namespace App\Http\Controllers;

use Exception;
use Inertia\Inertia;
use App\Models\Habitude;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreHabitudeRequest;
use App\Http\Requests\UpdateHabitudeRequest;

class HabitudeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render("habitude/Index", ["habitudes" => Habitude::where("user_id", Auth::user()->id)->get()]);
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
}
