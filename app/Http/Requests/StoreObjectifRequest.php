<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreObjectifRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "titre" => ["required", "string"],
            "dateCommencement" => ["required"],
            "dateEcheance" => ["required"],
        ];
    }

    public function messages()
    {
        return [
            "titre.required" => "Veuillez entrer le titre",
            "titre.string" => "LE titre doit être une chaine de caractère",
            "dateCommencement.required" => "Veuillez entrer la date de commencement",
            "dateEcheance.required" => "Veuillez entrer la date d'echeance",
        ];
    }
}
