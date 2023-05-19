// Ambil semua elemen genre
const genreLinks = document.querySelectorAll('.genre-container .genre');

// Tambahkan event listener untuk setiap genre
genreLinks.forEach(genreLink => {
    genreLink.addEventListener('click', event => {
        event.preventDefault();
        const selectedGenre = genreLink.innerText.toLowerCase();
        const url = `../../../list-komik.html?genre=${selectedGenre}`;
        window.location.href = url;
    });
});

// Jika ada parameter genre yang dilewatkan dari URL, tetapkan filter genre pada halaman detail komik
const urlParams = new URLSearchParams(window.location.search);
const selectedGenre = urlParams.get('genre');
if (selectedGenre) {
  const genreButton = document.querySelector(`.genre-container .genre[data-genre="${selectedGenre}"]`);
  if (genreButton) {
    genreButton.classList.add('active');
  }
}
