<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="ckeditor/ckeditor.js"></script>
</head>
<body>
    <h1>Hello</h1>
    <div class="form-group">
        <label>Content</label>
        <textarea required name="content" id="content" class="form-control"></textarea>
    </div>
    <script>
        CKEDITOR.replace('content');

    </script>
</body>
</html>