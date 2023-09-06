<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\About;
class AboutController extends Controller
{
     //index Method__//
     public function index(){
        $data = About::all();
        return view('backend.about.index', compact('data'));
    }
    //__create Method__//
public function create(){
    return view('backend.about.create');
}

//__Store Method__//
public function store(Request $request){
    $request->validate([
         'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:1024',
        'link1' => 'required',
        'link2' => 'required',
        'link3' => 'required',
        'link4' => 'required',
        'link5' => 'required',
    ]);
    $About=new About;
    $image= time().'.'. $request->image->extension();
    $request->image->move(public_path('About'), $image);
    $path = "/About/".$image;
    $About->image = $path;
    // image code End
    $About->link1 = $request->link1;
    $About->link2 = $request->link2;
    $About->link3 = $request->link3;
    $About->link4 = $request->link4;
    $About->link5 = $request->link5;
    $About->save();
    return redirect()->back();
  }
  //__ Edit Method__//
public function edit($id){
    $data=About::find($id);
    return view('backend.about.edit', compact('data'));
    }
    //__Update Method__//
public function update(Request $request,$id){
    $request->validate([
        'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:1024',
        'link1' => 'required',
        'link2' => 'required',
        'link3' => 'required',
        'link4' => 'required',
        'link5' => 'required',
    ]);
    $About=About::find($id);
    // image code start
    $image= time().'.'. $request->image->extension();
    $request->image->move(public_path('About'), $image);
    $path = "/About/".$image;
    $About->image = $path;
    // image code End
      $About->link1 = $request->link1;
    $About->link2 = $request->link2;
    $About->link3 = $request->link3;
    $About->link4 = $request->link4;
    $About->link5 = $request->link5;
    $About->save();
    return redirect()->back();
  }
   //__Delete Method__//
   public function destroy($id)
   {
    About::destroy($id);
       return redirect()->back();
   }
}
