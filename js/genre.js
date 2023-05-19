// Ambil elemen-elemen yang dibutuhkan
const urlParams = new URLSearchParams(window.location.search);
const selectedGenre = urlParams.get('genre');
const genreButtons = document.querySelectorAll('.genre-btn');
const comicItems = document.querySelectorAll('.comic-items');
const alphabets = document.querySelectorAll('.list-judul .alphabet');

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
    });
});

genreButtons.forEach(button => {
    genreButtons.addEventListener('click', () => {
        const selectedGenre = genreButtons.innerText.toLowerCase();

        // Tampilkan semua abjad
        alphabets.forEach(alphabet => {
            alphabet.style.display = 'block';
        });

        // Filter abjad berdasarkan genre yang dipilih
        alphabets.forEach(alphabet => {
            const genres = alphabet.getAttribute('data-genres').split(',').map(genre => genre.trim());
            if (!genres.includes(selectedGenre)) {
                alphabet.style.display = 'none';
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
}

// Tambahkan event listener untuk setiap genre-btn
genreButtons.forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();
        const genre = button.dataset.genre;
        const genreContainer = document.querySelector('.list-judul');

        // Sembunyikan semua elemen judul komik
        const judulKomik = genreContainer.querySelectorAll('.tittle');
        judulKomik.forEach(judul => {
            judul.style.display = 'none';
        });

        // Tampilkan hanya komik dengan genre yang dipilih dan abjad yang sesuai
        const selectedKomik = genreContainer.querySelectorAll(`.comic-items[data-genres*="${genre}"]`);
        selectedKomik.forEach(komik => {
            const abjad = komik.querySelector('.judul').textContent.charAt(0).toUpperCase();
            if (button.dataset.abjad === abjad) {
                komik.style.display = 'block';
            }
        });
    });
});

// Tambahkan event listener untuk setiap genre-btn
genreButtons.forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();
        const genre = button.dataset.genre.toLowerCase();
        const genreContainer = document.querySelector('.list-judul');

        // Sembunyikan semua elemen judul komik
        const judulKomik = genreContainer.querySelectorAll('.tittle');
        judulKomik.forEach(judul => {
            judul.style.display = 'none';
        });

        // Tampilkan hanya komik dengan genre yang dipilih dan abjad yang sesuai
        const selectedKomik = genreContainer.querySelectorAll('.comic-items');
        selectedKomik.forEach(komik => {
            const genres = komik.dataset.genres.split(',').map(genre => genre.trim());
            const abjad = komik.querySelector('.judul').textContent.charAt(0).toUpperCase();

            if (genres.includes(genre) && button.dataset.abjad === abjad) {
                komik.style.display = 'block';
            }
        });
    });
});