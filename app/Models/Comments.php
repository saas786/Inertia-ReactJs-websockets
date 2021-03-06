<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comments extends Model
{
  use HasFactory;
  protected $fillable = ["workorder_id", "user_id", "text"];
  public function workorder()
  {
    return $this->belongsTo(Workorder::class);
  }
  public function user()
  {
    return $this->belongsTo(User::class, "user_id");
  }
}
