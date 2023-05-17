// Ambil elemen-elemen yang dibutuhkan
const genreButtons = document.querySelectorAll('.genre-btn');
const comicItems = document.querySelectorAll('.comic-items');

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