<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorkordersTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create("workorders", function (Blueprint $table) {
      $table->id();
      $table->string("task");
      $table->string("desc");
      $table->string("priority")->default("none");
      $table->string("status")->default("open");
      $table->string("assigned_to")->default("admin");
      $table
        ->foreignId("user_id")
        ->constrained()
        ->cascadeOnDelete();
      $table->string("image")->nullable();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists("workorders");
  }
}
