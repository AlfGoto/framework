<?php

// echo json_encode($_POST['inputFILM']);
echo json_encode('success');
// var_dump($_POST);

exit();

$pdo = new PDO('mysql:host=localhost;dbname=cinema', 'alfred', 'code'); 

if ($_POST['inputDATE'] == '') {
    $query = $pdo->prepare("SELECT * FROM movie INNER JOIN movie_genre ON movie.id=movie_genre.id_movie INNER JOIN distributor ON movie.id_distributor=distributor.id WHERE id_genre LIKE :genre AND movie.title LIKE :title AND distributor.name LIKE :distrib ;");
    $query->bindValue(':title', '%' . $_POST['inputFILM'] . "%");
    $query->bindValue(':distrib', '%' . $_POST['inputDISTRIB'] . "%");
    if ($_POST['selectGENRE'] == '') {
        $query->bindValue(':genre', "%");
    } else {
        $query->bindValue(':genre', $_POST['selectGENRE']);
    }
    $query->execute();

    $results = $query->fetchAll();

    echo json_encode($results);

} else {


    $query = $pdo->prepare("SELECT * FROM movie INNER JOIN movie_genre ON movie.id=movie_genre.id_movie INNER JOIN distributor ON movie.id_distributor=distributor.id RIGHT JOIN movie_schedule ON movie.id=movie_schedule.id_movie WHERE id_genre LIKE :genre AND movie.title LIKE :title AND distributor.name LIKE :distrib AND date_begin LIKE :date ;");
    $query->bindValue(':date', $_POST['inputDATE'] . "%");
    $query->bindValue(':title', '%' . $_POST['inputFILM'] . "%");
    $query->bindValue(':distrib', '%' . $_POST['inputDISTRIB'] . "%");
    if ($_POST['selectGENRE'] == '') {
        $query->bindValue(':genre', "%");
    } else {
        $query->bindValue(':genre', $_POST['selectGENRE']);
    }
    $query->execute();

    $results = $query->fetchAll();

    echo json_encode($results);
}


