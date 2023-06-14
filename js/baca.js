// FITUR FULLSCREEN
var fullscreenLink = document.querySelector('.navbar-nav a[href="#"]');
fullscreenLink.addEventListener('click', toggleFullScreen);

function toggleFullScreen() {
    if (document.fullscreenElement) {
        exitFullscreen();
    } else {
        enterFullscreen();
    }
}

function enterFullscreen() {
    var element = document.documentElement;

    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari, Opera
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
}

// NAVIGASI ATAS UNTUK KELUAR
// Mendapatkan elemen-elemen yang diperlukan
var navBack = document.getElementById('navBack');
var backBtn = document.getElementById('backBtn');
var berandaBtn = document.getElementById('beranda');
var fullScreenBtn = document.getElementById('fullScreen');

// Menambahkan event listener ke tombol "Back"
backBtn.addEventListener('click', function () {
    window.location.href = '../martial-peak.html';
});

// Menambahkan event listener ke tombol "Beranda"
berandaBtn.addEventListener('click', function () {
    window.location.href = '../../index.html';
});

// Menambahkan event listener ke tombol "FullScreen"
fullScreenBtn.addEventListener('click', function () {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
    }
});

// Mendapatkan elemen navigasi bawah
var navBack = document.getElementById('navBack');

// Menambahkan event listener ke document
document.addEventListener('click', function (event) {
    var targetElement = event.target;

    // Mengecek apakah target element di luar navigasi bawah
    if (!navBack.contains(targetElement)) {
        // Toggle tampilan navigasi bawah
        toggleNavBack();
    }
});

// NAVIGASI BAWAH
// Mendapatkan elemen-elemen navigasi
var navBottom = document.getElementById('navBottom');
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');
var chapterBtn = document.getElementById('chapterBtn');
var chapterList = document.getElementById('chapterList');
var upBtn = document.getElementById('upBtn');

// Menambahkan event listener untuk tombol-tombol navigasi
prevBtn.addEventListener('click', goToPreviousChapter);
nextBtn.addEventListener('click', goToNextChapter);
chapterBtn.addEventListener('click', toggleChapterList);
upBtn.addEventListener('click', scrollToTop);

// Fungsi untuk pergi ke chapter sebelumnya
function goToPreviousChapter() {
    var currentChapter = getCurrentChapter();
    if (currentChapter > 1) {
        var previousChapter = currentChapter - 1;
        var previousChapterURL = 'ch' + previousChapter + '.html';
        window.location.href = previousChapterURL;
    }
}

// Fungsi untuk pergi ke chapter berikutnya
function goToNextChapter() {
    var currentChapter = getCurrentChapter();
    var totalChapters = getTotalChapters();
    if (currentChapter < totalChapters) {
        var nextChapter = currentChapter + 1;
        var nextChapterURL = 'ch' + nextChapter + '.html';
        window.location.href = nextChapterURL;
    }
}

// Fungsi untuk mendapatkan nomor chapter saat ini
function getCurrentChapter() {
    var currentURL = window.location.href;
    var chapterRegex = /ch(\d+)\.html/;
    var matches = currentURL.match(chapterRegex);
    if (matches && matches.length > 1) {
        return parseInt(matches[1]);
    }
    return 1;
}

// Fungsi untuk mendapatkan total chapter
function getTotalChapters() {
    var chapterItems = chapterList.querySelectorAll('ul li');
    return chapterItems.length;
}

// Fungsi untuk menampilkan/menyembunyikan daftar chapter
function toggleChapterList() {
    chapterList.style.display = (chapterList.style.display === 'none') ? 'block' : 'none';
}

// Fungsi untuk menggulir ke bagian atas halaman
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Menambahkan event listener ke document
document.addEventListener('click', function (event) {
    var targetElement = event.target;

    // Mengecek apakah target element di luar navigasi bawah
    if (!navBottom.contains(targetElement)) {
        // Toggle tampilan navigasi bawah
        toggleNavBottom();
    }
});

// KONTEN KOMIK
function loadImages(imageContainerId, folderName, basePath, imageCount, imageExtension) {
    var imageContainer = document.getElementById(imageContainerId);

    for (var i = 1; i <= imageCount; i++) {
        var img = document.createElement('img');
        img.src = folderName + '/' + basePath + i + imageExtension;
        img.alt = 'Gambar ' + i;
        imageContainer.appendChild(img);
    }
}

// NAVIGASI HIDDEN
var navTop = document.getElementById('navTop');
var isNavTopVisible = false;

function showNavTop() {
  navTop.style.opacity = '1';
  navTop.style.pointerEvents = 'auto';
  isNavTopVisible = true;
}

function hideNavTop() {
  navTop.style.opacity = '0';
  navTop.style.pointerEvents = 'none';
  isNavTopVisible = false;
}

window.addEventListener('scroll', function() {
  if (!isNavTopVisible && window.pageYOffset === 0) {
    showNavTop();
  } else if (isNavTopVisible && window.pageYOffset > 0) {
    hideNavTop();
  }
});

document.addEventListener('click', function() {
  if (!isNavTopVisible) {
    showNavTop();
  }
});

navTop.addEventListener('click', function(event) {
  event.stopPropagation();
});


