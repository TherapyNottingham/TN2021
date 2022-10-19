{{ $css := resources.Get "css/main.css" }}
{{ $style := $css | resources.PostCSS }}