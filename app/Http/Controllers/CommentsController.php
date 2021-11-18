<?php

namespace App\Http\Controllers;

use App\Models\Comments;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CommentsController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    //
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $comment = new Comments();
    $comment->text = $request["text"];
    $comment->workorder_id = $request["workorder_id"];
    $comment->user_id = auth()->user()->id;
    $comment->save();
    return Redirect::route("workorder.show", $request["workorder_id"]);
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Models\Comments  $comments
   * @return \Illuminate\Http\Response
   */
  public function show(Comments $comments)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Models\Comments  $comments
   * @return \Illuminate\Http\Response
   */
  public function edit(Comments $comments)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Models\Comments  $comments
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Comments $comments)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Models\Comments  $comments
   * @return \Illuminate\Http\Response
   */
  public function destroy(Comments $comments)
  {
    //
  }
}
