@extends('layouts.app')

@section('main-content')

<div class="container">
    <h2>-----</h2>
    <form action="{{route('backend.effect.store')}}" method="post" enctype="multipart/form-data">
        @csrf
      <div class="form-group">
        <label for="text">name</label>
        <input type="text" class="form-control" id="name" placeholder="name" name="name">
        @if ($errors->has('name'))
        <span class="error">{{ $errors->first('name') }}</span>
    @endif
      </div>
      <div class="form-group">
        <label for="skill1">skill1</label>
        <input type="text" class="form-control" id="skill1" placeholder="skill1" name="skill1">
        @if ($errors->has('skill1'))
        <span class="error">{{ $errors->first('skill1') }}</span>
    @endif
      </div>
      <div class="form-group">
        <label for="skill2">skill2</label>
        <input type="text" class="form-control" id="skill2" placeholder="skill2" name="skill2">
        @if ($errors->has('skill2'))
        <span class="error">{{ $errors->first('skill2') }}</span>
    @endif
      </div>
      <div class="form-group">
        <label for="skill3">skill3</label>
        <input type="text" class="form-control" id="skill3" placeholder="skill3" name="skill3">
        @if ($errors->has('skill3'))
        <span class="error">{{ $errors->first('skill3') }}</span>
    @endif
      </div>

          <div class="form-group">
        <label for="image">image:</label>
        <input type="file" class="form-control" id="image"  placeholder="Enter image" name="image">
        @if ($errors->has('image'))
        <span class="error">{{ $errors->first('image') }}</span>
    @endif
      </div>
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>


@endsection
