<?php

namespace App\Http\Controllers;
use App\Models\Workorder;
use Illuminate\Http\Request;

class WorkorderListController extends Controller
{
  /**
   *return a list of workorders */
  public function list()
  {
    return Workorder::orderBy("task", "desc")->get();
  }
}
