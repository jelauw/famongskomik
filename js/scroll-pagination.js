function loadNextPage() {
    var currentPageNumber = getCurrentPageNumber();
    var nextPageNumber = currentPageNumber + 1;
    var nextPage = 'ch' + nextPageNumber + '.html';

    fetch(nextPage) // Mengambil konten dari halaman berikutnya
        .then(response => response.text())
        .then(data => {
            var parser = new DOMParser();
            var newDocument = parser.parseFromString(data, 'text/html');

            var newContent = newDocument.querySelector('body').innerHTML;
            document.documentElement.innerHTML += newContent; // Menambahkan konten baru ke halaman saat mencapai batas scroll bawah
            history.pushState({}, '', nextPage); // Mengganti URL halaman
        })
        .catch(error => {
            console.error('Terjadi kesalahan:', error);
        });
}

function getCurrentPageNumber() {
    var currentPage = window.location.href;
    var pageNumberMatch = currentPage.match(/ch(\d+)\.html/);
    if (pageNumberMatch) {
        return parseInt(pageNumberMatch[1]);
    }
    return 1; // Jika tidak ada nomor halaman yang ditemukan, kembalikan 1 sebagai nilai default
}

window.addEventListener('scroll', function () {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var pageHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    if (scrollPosition + viewportHeight >= pageHeight) {
        var currentPageNumber = getCurrentPageNumber();
        var nextPageNumber = currentPageNumber + 1;
        var nextPage = 'ch' + nextPageNumber + '.html';
        var nextPageExists = document.querySelector('link[rel="next"]'); // Memeriksa apakah tag <link> dengan rel="next" ada

        if (nextPageExists) {
            loadNextPage(); // Memuat halaman berikutnya jika tag <link> dengan rel="next" ada
        } else {
            console.log('Tidak ada halaman berikutnya.'); // Menampilkan pesan jika tidak ada halaman berikutnya yang ditemukan
        }
    }
});