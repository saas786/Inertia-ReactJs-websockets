<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Workorder extends Model
{
  use HasFactory;
  protected $fillable = ["cover_image", "task", "desc"];
  public function user()
  {
    return $this->belongsTo("App\Models\User");
  }
  public function comments()
  {
    return $this->hasMany("App\Models\Comments");
  }
  public function images()
  {
    return $this->hasMany("App\Models\Images");
  }
}
