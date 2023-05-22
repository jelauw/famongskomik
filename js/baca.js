var navbar = document.getElementById('navbar');
var isNavVisible = true;
var timeout;

function hideNavbar() {
  navbar.classList.add('hidden');
  isNavVisible = false;
}

function showNavbar() {
  navbar.classList.remove('hidden');
  isNavVisible = true;
}

window.addEventListener('scroll', function() {
  if (isNavVisible) {
    hideNavbar();
  }

  clearTimeout(timeout);
  timeout = setTimeout(function() {
    if (!isNavVisible) {
      hideNavbar();
    }
  }, 300);
});

document.addEventListener('click', function() {
  if (!isNavVisible) {
    showNavbar();
  }
});

window.addEventListener('DOMContentLoaded', function() {
  showNavbar();
});
window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop === 0) {
    showNavbar();
  } else {
    hideNavbar();
  }
});



var navigation = document.getElementById('navigation');
var isNavVisible = true;
var timeout;

function hideNavigation() {
  navigation.classList.add('hidden');
  isNavVisible = false;
}

function showNavigation() {
  navigation.classList.remove('hidden');
  isNavVisible = true;
}

window.addEventListener('scroll', function() {
  if (isNavVisible) {
    hideNavigation();
  }

  clearTimeout(timeout);
  timeout = setTimeout(function() {
    if (!isNavVisible) {
      hideNavigation();
    }
  }, 300);
});

document.addEventListener('click', function() {
  showNavigation();
});

window.addEventListener('DOMContentLoaded', function() {
  showNavigation();
});

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop === 0) {
    showNavigation();
  } else {
    hideNavigation();
  }
});



var fullscreenButton = document.querySelector('a[href="#"]');
fullscreenButton.addEventListener('click', toggleFullscreen);

function toggleFullscreen() {
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
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}


var chapterBtn = document.getElementById('chapterBtn');
var chapterList = document.getElementById('chapterList');

chapterBtn.addEventListener('click', function() {
  chapterList.classList.toggle('show');
});





// UPLOAD IMAGE
var imageContainer = document.getElementById('image-container');

var basePath = 'img-ch/Chapter 0001/Gambar '; // Base path atau URL gambar
var imageCount = 17; // Jumlah gambar
var imageExtension = '.jpg'; // Ekstensi gambar

for (var i = 1; i <= imageCount; i++) {
  var img = document.createElement('img');
  img.src = basePath + i + imageExtension;
  img.alt = 'Gambar ' + i;
  imageContainer.appendChild(img);
}



var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');
var chapterBtn = document.getElementById('chapterBtn');
var chapterList = document.getElementById('chapterList');

prevBtn.addEventListener('click', function() {
  // Aksi saat tombol "Previous" diklik
  // ...
});

nextBtn.addEventListener('click', function() {
  // Aksi saat tombol "Next" diklik
  // ...
});

chapterBtn.addEventListener('click', function() {
  if (chapterList.style.display === 'none') {
    chapterList.style.display = 'block';
  } else {
    chapterList.style.display = 'none';
  }
});
