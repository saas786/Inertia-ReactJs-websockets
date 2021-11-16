<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Workorder extends Model
{
  use HasFactory;
  protected $fillable = ["cover_image", "task", "desc"];
}
