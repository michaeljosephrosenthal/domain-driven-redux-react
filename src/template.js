export default function template({title}){
    return `\
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>${title}</title>
        </head>
    <body>
        <div id="app"></div>
        <script src="/static/bundle.js"></script>
    </body>
</html>
`
}
