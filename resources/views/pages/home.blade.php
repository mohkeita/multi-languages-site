@extends('layouts.app')

@section('content')
    <div class="container">
        <h1>{{ __('messages.slogan') }}</h1>
        <a href="{{ route('dashboard') }}">Dashboard</a>
    </div>
@endsection

