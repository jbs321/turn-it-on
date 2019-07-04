@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">Turn It On</div>
    <div class="row">
        <div class="col-xs">
            <div class="bulb">
                <img src="/images/bulb-off.png" height="1200">
            </div>
        </div>
        <div class="col-xs">
            <button class="bulb-switch">ON</button>
            <button class="bulb-switch">OFF</button>
        </div>
    </div>
</div>
</body>
</html>
@endsection