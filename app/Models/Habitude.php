<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Habitude extends Model
{
    /** @use HasFactory<\Database\Factories\HabitudeFactory> */
    use HasFactory;

    protected $fillable = [
        "titre",
        "frequence",
        "user_id"
    ];

   

    protected $with = ["checkins"];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function checkins()
    {
        return $this->belongsToMany(User::class, "habitude_user")->withPivot("date", "estAccompli")->withTimestamps();
    }

}
