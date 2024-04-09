@extends('layouts.adminlayout')
  @section('form')
  <div id="success">
    @if(Session::has('success'))
  <div style="color: green;">
      {{ Session::get('success') }}
  </div>
@endif

@if(Session::has('error'))
  <div style="color: red;">
      {{ Session::get('error') }}
  </div>
@endif
    
  </div>

<div id="farmerhome"></div>

      
@endsection

