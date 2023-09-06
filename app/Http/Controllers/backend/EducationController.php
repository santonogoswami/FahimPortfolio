<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Education;
class EducationController extends Controller
{
 //index Method__//
     public function index(){
        $data = Education::all();
        return view('backend.Education.index', compact('data'));
    }
    //__create Method__//
public function create(){
    return view('backend.Education.create');
}

//__Store Method__//
public function store(Request $request){
    $request->validate([
        'time' => 'required',
        'degree' => 'required',
        'institute' => 'required',
        
    ]);
    $Education=new Education;
    $Education->time = $request->time;
    $Education->degree = $request->degree;
    $Education->institute = $request->institute;
    $Education->save();
    return redirect()->back();
  }
  //__ Edit Method__//
public function edit($id){
    $data=Education::find($id);
    return view('backend.Education.edit', compact('data'));
    }
    //__Update Method__//
public function update(Request $request,$id){
    $request->validate([
        'time' => 'required',
        'degree' => 'required',
        'institute' => 'required',

        
    ]);
    $Education=Education::find($id);
    $Education->time = $request->time;
    $Education->degree = $request->degree;
    $Education->institute = $request->institute;
    $Education->save();
    return redirect()->back();
  }
   //__Delete Method__//
   public function destroy($id)
   {
    Education::destroy($id);
       return redirect()->back();
   }
}
