@extends('layouts.app')

@section('content')
    <div class="container">
        <h1>{{ __('messages.slogan') }}</h1>
        <ul>
        @foreach($posts as $post)
            <li>{{ $post->title }} - {{ $post->body }}</li>
        @endforeach
        </ul>

        <a href="{{ route('dashboard') }}">Dashboard</a>
    </div>
@endsection

