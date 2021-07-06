<html>
<head>
    <title>Document</title>
</head>
<body>
    <?php
    $a = $_POST['a'];
 
    echo "
    <script type="text/JavaScript">
    res = Math.sqrt(a);
    $res = res;
    </script>";
    echo "Raiz de $a é $res";
    ?>
</body>
</html>
