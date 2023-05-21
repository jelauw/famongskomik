// Ambil elemen-elemen yang dibutuhkan
const urlParams = new URLSearchParams(window.location.search);
const selectedGenre = urlParams.get('genre');
var dropdownBtn = document.querySelector('.dropdown-btn');
var dropdownContent = document.querySelector('.dropdown-content');
const genreButtons = document.querySelectorAll('.genre-btn');
const comicItems = document.querySelectorAll('.comic-items');
const alphabets = document.querySelectorAll('.list-judul .alphabet');


dropdownBtn.addEventListener('click', function () {
    if (dropdownContent.style.display === 'none') {
        dropdownContent.style.display = 'block';
    } else {
        dropdownContent.style.display = 'none';
    }
});
// Tambahkan event listener pada setiap tombol genre
genreButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // Hapus kelas 'active' dari semua tombol genre
        genreButtons.forEach((btn) => {
            btn.classList.remove('active');
        });

        // Tambahkan kelas 'active' pada tombol yang diklik
        e.target.classList.add('active');

        // Ambil genre yang dipilih
        const selectedGenre = e.target.getAttribute('data-genre');

        // Tampilkan komik yang sesuai dengan genre yang dipilih
        comicItems.forEach((item) => {
            const genres = item.getAttribute('data-genres').split(',').map(genre => genre.trim());
            if (selectedGenre === 'all' || genres.includes(selectedGenre)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        // Filter abjad berdasarkan genre yang dipilih
        alphabets.forEach(alphabet => {
            const genres = alphabet.getAttribute('data-genres').split(',').map(genre => genre.trim());
            if (!genres.includes(selectedGenre)) {
                alphabet.style.display = 'none';
            } else {
                alphabet.style.display = 'block';
            }
        });
    });
});

// Tampilkan komik yang sesuai dengan genre yang dipilih
if (selectedGenre) {
    comicItems.forEach(item => {
        const genres = item.dataset.genres.split(',').map(genre => genre.trim());
        if (genres.includes(selectedGenre)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    alphabets.forEach(alphabet => {
        const genres = alphabet.getAttribute('data-genres').split(',').map(genre => genre.trim());
        if (!genres.includes(selectedGenre)) {
            alphabet.style.display = 'none';
        } else {
            alphabet.style.display = 'block';
        }
    });
}