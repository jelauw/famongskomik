<?php
if (isset($_GET['folder'])) {
  $folderName = $_GET['folder'];
  $imagePath = "img-ch/Chapter /Gambar /" . $folderName; // Ubah dengan path folder gambar Anda

  $images = array();

  if (is_dir($imagePath)) {
    $dir = opendir($imagePath);

    while (($file = readdir($dir)) !== false) {
      if ($file != '.' && $file != '..' && !is_dir($imagePath . '/' . $file)) {
        $images[] = $file;
      }
    }

    closedir($dir);
  }

  header('Content-Type: application/json');
  echo json_encode($images);
}
?>
