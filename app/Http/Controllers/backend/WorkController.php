<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Work;
class WorkController extends Controller
{
    
     //index Method__//
     public function index(){
        $data = Work::all();
        return view('backend.work.index', compact('data'));
    }
    //__create Method__//
public function create(){
    return view('backend.work.create');
}

//__Store Method__//
public function store(Request $request){
    $request->validate([
       'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:1024',
        'work_name' => 'required',
        'link' => 'required',
    ]);
    $Work=new Work;
     // image code start
    $image= time().'.'. $request->image->extension();
    $request->image->move(public_path('Work'), $image);
    $path = "/Work/".$image;
    $Work->image = $path;
    // image code End
    $Work->work_name = $request->work_name;
    $Work->link = $request->link;
    $Work->save();
    return redirect()->back();
  }
  //__ Edit Method__//
public function edit($id){
    $data=Work::find($id);
    return view('backend.work.edit', compact('data'));
    }
    //__Update Method__//
public function update(Request $request,$id){
    $request->validate([
       'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:1024',
        'work_name' => 'required',
        'link' => 'required',
    ]);
    $Work=Work::find($id);
    // image code start
    $image= time().'.'. $request->image->extension();
    $request->image->move(public_path('Work'), $image);
    $path = "/Work/".$image;
    $Work->image = $path;
    // image code End
    $Work->work_name = $request->work_name;
    $Work->link = $request->link;
    $Work->save();
    return redirect()->back();
  }
   //__Delete Method__//
   public function destroy($id)
   {
    Work::destroy($id);
       return redirect()->back();
   }
}
