var navbar = document.getElementById('navbar');
var scrolling = false;
var scrolled = false;
var timeout = null;

function hideNavbar() {
  navbar.classList.add('hidden');
}

function showNavbar() {
  navbar.classList.remove('hidden');
}

function handleScroll() {
  if (!scrolling) {
    scrolling = true;
    showNavbar();
  }

  clearTimeout(timeout);
  timeout = setTimeout(function() {
    scrolling = false;
    if (!scrolled) {
      hideNavbar();
    }
  }, 200);
}

function toggleNavbarVisibility() {
  scrolled = !scrolled;
  if (scrolled) {
    showNavbar();
  } else {
    hideNavbar();
  }
}

window.addEventListener('scroll', handleScroll);
navbar.addEventListener('click', toggleNavbarVisibility);

var imageContainer = document.getElementById('image-container');

var basePath = '/img-ch/chapter-0001'; // Base path atau URL gambar
var imageCount = 17; // Jumlah gambar
var imageExtension = '.jpg'; // Ekstensi gambar

for (var i = 1; i <= imageCount; i++) {
  var img = document.createElement('img');
  img.src = basePath + i + imageExtension;
  img.alt = 'Image ' + i;
  imageContainer.appendChild(img);
}
