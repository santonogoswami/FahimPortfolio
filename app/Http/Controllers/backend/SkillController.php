<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Skill;
class SkillController extends Controller
{
     //index Method__//
     public function index(){
        $data = Skill::all();
        return view('backend.Skill.index', compact('data'));
    }
    //__create Method__//
public function create(){
    return view('backend.Skill.create');
}

//__Store Method__//
public function store(Request $request){
    $request->validate([
        'skill' => 'required',
        'percentage' => 'required',
    ]);
    $Skill=new Skill;
    $Skill->skill = $request->skill;
    $Skill->percentage = $request->percentage;
    $Skill->save();
    return redirect()->back();
  }
  //__ Edit Method__//
public function edit($id){
    $data=Skill::find($id);
    return view('backend.Skill.edit', compact('data'));
    }
    //__Update Method__//
public function update(Request $request,$id){
    $request->validate([
        'skill' => 'required',
        'percentage' => 'required',
    ]);
    $Skill=Skill::find($id);
    $Skill->skill = $request->skill;
    $Skill->percentage = $request->percentage;
    $Skill->save();
    return redirect()->back();
  }
   //__Delete Method__//
   public function destroy($id)
   {
    Skill::destroy($id);
       return redirect()->back();
   }
}
