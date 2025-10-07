<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreHabitudeRequest extends FormRequest
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
            "frequence" => ["required", "string"]
        ];
    }

    public function messages()
    {
        return [
            "titre.required" => "Veillez entrer le titre",
            "frequence" => "Veillez entrer la frequence"
        ];
    }
}
