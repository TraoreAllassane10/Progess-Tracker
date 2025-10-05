<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ObjectifResource extends JsonResource
{
    // protected $objectif;

    // public function __construct($objectif)
    // {
    //     $this->objectif = $objectif;
    // }
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->resource->id,
            "titre" => $this->resource->titre,
            "date_commencement" => $this->resource->date_commencement,
            "date_echeance" => $this->resource->date_echeance,
            "statut" => $this->resource->statut,
            "user_id" => $this->resource->user_id
        ];
    }
}
