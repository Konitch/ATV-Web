<html>
<head>
    <title>Document</title>
</head>
<body>
    <?php
    $a = $_POST['a'];
    $b = $_POST['b'];
    
    echo "
    <script type="text/JavaScript">
    res = Math.pow(a,b);
    $res = res;
    </script>";
    echo "$a elevado a $b é $res";
    ?>

</body>
</html>

