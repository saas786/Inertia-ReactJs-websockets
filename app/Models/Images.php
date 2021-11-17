<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Images extends Model
{
  use HasFactory;
  protected $fillable = ["workorder_id", "user_id", "workorder_image"];
  public function workorder()
  {
    return $this->belongsTo(Workorder::class);
  }
  public function user()
  {
    return $this->belongsTo(User::class, "user_id");
  }
}
