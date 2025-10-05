<?php

namespace App\Http\Controllers;

use App\Http\Resources\ObjectifResource;
use App\Models\Objectif;
use App\Http\Requests\StoreObjectifRequest;
use App\Http\Requests\UpdateObjectifRequest;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ObjectifController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render("objectif/Index", ["objectifs" => ObjectifResource::collection(Objectif::all())]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {}

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreObjectifRequest $request)
    {

        $data = $request->validated();

        Objectif::create([
            "titre" => $data["titre"],
            "date_commencement" => $data["dateCommencement"],
            "date_echeance" => $data["dateEcheance"],
            "user_id" => Auth::user()->id
        ]);

        return redirect()->route("objectifs.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(Objectif $objectif)
    {
        return response()->json($objectif);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Objectif $objectif)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateObjectifRequest $request, Objectif $objectif)
    {

        $data = $request->validated();

        $objectif->update([
            "titre" => $data["titre"],
            "date_commencement" => $data["dateCommencement"],
            "date_echeance" => $data["dateEcheance"],
            "user_id" => Auth::user()->id
        ]);

        return redirect()->route("objectifs.index");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Objectif $objectif)
    {
        $objectif->delete();
    }
}
