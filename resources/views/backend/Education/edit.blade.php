@extends('layouts.app')

@section('main-content')

<div class="container">
    <h2>-----</h2>
    <form action="{{route('backend.Education.update', $data->id)}}" method="post" enctype="multipart/form-data">
        @csrf
      <div class="form-group">
        <label for="time">time:</label>
        <input type="text" class="form-control" id="time" value="{{$data->time}}"  placeholder="Enter time" name="time">
        @if ($errors->has('time'))
        <span class="error">{{ $errors->first('time') }}</span>
    @endif
      </div>
      <div class="form-group">
        <label for="degree">degree:</label>
        <input type="text" class="form-control" id="degree" value="{{$data->degree}}"  placeholder="degree" name="degree">
        @if ($errors->has('degree'))
        <span class="error">{{ $errors->first('degree') }}</span>
    @endif
      </div>
      <div class="form-group">
        <label for="institute">institute:</label>
        <input type="text" class="form-control" id="institute" value="{{$data->institute}}"  placeholder="institute" name="institute">
        @if ($errors->has('institute'))
        <span class="error">{{ $errors->first('institute') }}</span>
    @endif
      </div>

      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>


@endsection
