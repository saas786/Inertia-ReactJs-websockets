<?php

namespace App\Http\Controllers;
use App\Models\Comments;
use App\Models\Images;
use App\Models\Workorder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class WorkorderController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return Inertia::render("Workorders/Workorders", [
      Workorder::orderBy("task", "desc")->paginate(10),
    ]);
  }
  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    return Inertia::render("Workorders/CreateWorkorder");
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    if ($request->hasFile("cover_image") != null) {
      // Get filename with the extension
      $filenameWithExt = $request->file("cover_image")->getClientOriginalName();
      // Get just filename
      $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
      // Get just ext
      $extension = $request->file("cover_image")->getClientOriginalExtension();
      // Filename to store
      $fileNameToStore = $filename . "_" . time() . "." . $extension;
      // Upload Image
      $path = $request
        ->file("cover_image")
        ->storeAs("public/cover_images", $fileNameToStore);
    } else {
      $fileNameToStore = "noimage.jpg";
    }

    $wo = new Workorder();
    $wo->task = $request["task"];
    $wo->desc = $request["desc"];
    $wo->priority = $request["priority"];
    $wo->status = $request["status"];
    $wo->assigned_to = $request["assigned_to"];
    $wo->user_id = $request["user_id"];
    $wo->image = $fileNameToStore;
    $wo->save();
    return Inertia::render("Workorders/Workorders", Workorder::paginate(10));
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
    $wo = Workorder::findOrFail($id);
    $images = Images::where("workorder_id", $id)->get();
    $comments = Comments::where("workorder_id", $id)->get();
    return Inertia::render("Workorders/SingleWorkorder", [
      $wo,
      $comments,
      $images,
    ]);
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function edit($id)
  {
    return Inertia::render("Workorders/EditWorkorder", [
      Workorder::findOrFail($id),
    ]);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {
    $wo = Workorder::find($id);
    if ($request->hasFile("cover_image") != null) {
      // Get filename with the extension
      $filenameWithExt = $request->file("cover_image")->getClientOriginalName();
      // Get just filename
      $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
      // Get just ext
      $extension = $request->file("cover_image")->getClientOriginalExtension();
      // Filename to store
      $fileNameToStore = $filename . "_" . time() . "." . $extension;
      // Upload Image
      $path = $request
        ->file("cover_image")
        ->storeAs("public/cover_images", $fileNameToStore);
      Storage::delete("public/cover_images" . $wo->cover_image);
    }
    $wo->task = $request["task"];
    $wo->desc = $request["desc"];
    $wo->priority = $request["priority"];
    $wo->status = $request["status"];
    $wo->assigned_to = $request["assigned_to"];
    $wo->user_id = $request["user_id"];
    if ($request->hasFile("cover_image")) {
      $wo->cover_image = $fileNameToStore;
    }
    $wo->update();
    return Inertia::render("Workorders/SingleWorkorder", [$wo]);
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    $wo = Workorder::find($id);
    //Check if post exists before deleting
    if (!isset($wo)) {
      return redirect("/workorder")->with("error", "No Post Found");
    }

    // Check for correct user
    if (auth()->user()->id !== $wo->user_id) {
      return redirect("/workorder")->with("error", "Unauthorized Page");
    }

    if ($wo->cover_image != "noimage.jpg") {
      // Delete Image
      Storage::delete("public/cover_images/" . $wo->cover_image);
    }
    Workorder::destroy($id);
    return Inertia::render("Workorders/Workorders", [
      Workorder::orderBy("task", "desc")->paginate(10),
    ]);
  }
}
