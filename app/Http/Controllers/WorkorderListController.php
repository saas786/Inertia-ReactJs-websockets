<?php

namespace App\Http\Controllers;
use App\Models\Workorder;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
class WorkorderListController extends Controller
{
  /**
   *return a list of workorders */
  public function list()
  {
    return Workorder::orderBy("task", "desc")->get();
  }
  public function users()
  {
    return Inertia::render("Workorders/UserWorkorders", [
      Workorder::where("user_id", Auth::user())->get(),
    ]);
  }
}
