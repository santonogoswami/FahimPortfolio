@extends('layouts.app')

@section('main-content')

<div class="container">
    <h2>-----</h2>
    <form action="{{route('backend.Skill.store')}}" method="post" enctype="multipart/form-data">
        @csrf
      <div class="form-group">
        <label for="skill">skill</label>
        <input type="text" class="form-control" id="skill" placeholder="skill" name="skill">
        @if ($errors->has('skill'))
        <span class="error">{{ $errors->first('skill') }}</span>
    @endif
      </div>
      <div class="form-group">
        <label for="percentage">percentage</label>
        <input type="number" class="form-control" id="percentage" placeholder="percentage" name="percentage">
        @if ($errors->has('percentage'))
        <span class="error">{{ $errors->first('percentage') }}</span>
    @endif
      </div>
      
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>


@endsection
