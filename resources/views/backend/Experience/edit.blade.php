@extends('layouts.app')

@section('main-content')

<div class="container">
    <h2>-----</h2>
    <form action="{{route('backend.Experience.update', $data->id)}}" method="post" enctype="multipart/form-data">
        @csrf
      <div class="form-group">
        <label for="time">time:</label>
        <input type="text" class="form-control" id="time" value="{{$data->time}}"  placeholder="Enter time" name="time">
        @if ($errors->has('time'))
        <span class="error">{{ $errors->first('time') }}</span>
    @endif
      </div>
      <div class="form-group">
        <label for="position">position:</label>
        <input type="text" class="form-control" id="position" value="{{$data->position}}"  placeholder="position" name="position">
        @if ($errors->has('position'))
        <span class="error">{{ $errors->first('position') }}</span>
    @endif
      </div>
      <div class="form-group">
        <label for="company">company:</label>
        <input type="text" class="form-control" id="company" value="{{$data->company}}"  placeholder="company" name="company">
        @if ($errors->has('company'))
        <span class="error">{{ $errors->first('company') }}</span>
    @endif
      </div>

      <div class="form-group">
        <label for="details">details:</label>
        <input type="text" class="form-control" id="details" value="{{$data->details}}"  placeholder="details" name="details">
        @if ($errors->has('details'))
        <span class="error">{{ $errors->first('details') }}</span>
    @endif
      </div>
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>


@endsection
