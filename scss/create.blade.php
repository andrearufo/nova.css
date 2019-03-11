@extends('layouts.app')

@section('content')
    <div class="container">

        @component('layouts.title')
            @slot('suptitle')
                <a href="{{ route('organization-show', $organization) }}">{{ $organization->name }}</a>
                 >
                Projects
            @endslot
            @slot('title', __('Add project'))
            @slot('action', false)
        @endcomponent

        <form action="{{ route('organization-project-store', $organization) }}" method="post">

            @csrf

            <div class="form-group">
                <label for="organization">Organization</label>
                <input type="text" class="form-control" name="organization" id="organization" value="{{ $organization->name }}" readonly disabled>
            </div>

            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" name="name" id="name" value="{{ old('name') }}" required>
            </div>

            <div class="form-group">
                <label for="description">Description</label>
                <input type="text" class="form-control" name="description" id="description" value="{{ old('description') }}">
            </div>

            <button type="submit" class="btn btn-click">Create</button>

        </form>

    </div>
@endsection
