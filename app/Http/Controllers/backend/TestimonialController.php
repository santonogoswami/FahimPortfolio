<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Testimonial;
class TestimonialController extends Controller
{
   //index Method__//
     public function index(){
        $data = Testimonial::all();
        return view('backend.Testimonial.index', compact('data'));
    }
    //__create Method__//
public function create(){
    return view('backend.Testimonial.create');
}

//__Store Method__//
public function store(Request $request){
    $request->validate([
         'description' => 'required',
       'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:1024',
        'name' => 'required',
        'designation' => 'required',
    ]);
    $Testimonial=new Testimonial;
     $Testimonial->description = $request->description;
     // image code start
    $image= time().'.'. $request->image->extension();
    $request->image->move(public_path('Testimonial'), $image);
    $path = "/Testimonial/".$image;
    $Testimonial->image = $path;
    // image code End
    $Testimonial->name = $request->name;
    $Testimonial->designation = $request->designation;
    $Testimonial->save();
    return redirect()->back();
  }
  //__ Edit Method__//
public function edit($id){
    $data=Testimonial::find($id);
    return view('backend.Testimonial.edit', compact('data'));
    }
    //__Update Method__//
public function update(Request $request,$id){
    $request->validate([
         'description' => 'required',
       'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:1024',
        'name' => 'required',
        'designation' => 'required',
    ]);
    $Testimonial=Testimonial::find($id);
     $Testimonial->description = $request->description;
    // image code start
    $image= time().'.'. $request->image->extension();
    $request->image->move(public_path('Testimonial'), $image);
    $path = "/Testimonial/".$image;
    $Testimonial->image = $path;
    // image code End
    $Testimonial->name = $request->name;
    $Testimonial->designation = $request->designation;
    $Testimonial->save();
    return redirect()->back();
  }
   //__Delete Method__//
   public function destroy($id)
   {
    Testimonial::destroy($id);
       return redirect()->back();
   }
}
