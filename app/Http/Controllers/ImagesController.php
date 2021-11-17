<?php

namespace App\Http\Controllers;
use App\Models\Workorder;
use App\Models\Images;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ImagesController extends Controller
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
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    // Handle File Upload
    if ($request->hasFile("workorder_image")) {
      // Get filename with the extension
      $filenameWithExt = $request
        ->file("workorder_image")
        ->getClientOriginalName();
      // Get just filename
      $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
      // Get just ext
      $extension = $request
        ->file("workorder_image")
        ->getClientOriginalExtension();
      // Filename to store
      $fileNameToStore = $filename . "_" . time() . "." . $extension;
      // Upload Image
      $path = $request
        ->file("workorder_image")
        ->storeAs("public/workorder_images", $fileNameToStore);
    } else {
      return Inertia::render(
        "Workorders/SingleWorkorder",
        Workorder::find($request["workorder_id"])
      );
    }
    $image = new Images();
    $image->workorder_image = $fileNameToStore;
    $image->workorder_id = $request["workorder_id"];
    $image->save();
    return Redirect::route("workorder.show", $request["workorder_id"]);
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Models\Images  $images
   * @return \Illuminate\Http\Response
   */
  public function show(Images $images)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Models\Images  $images
   * @return \Illuminate\Http\Response
   */
  public function edit(Images $images)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Models\Images  $images
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Images $images)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Models\Images  $images
   * @return \Illuminate\Http\Response
   */
  public function destroy(Images $images)
  {
    //
  }
}
