// Mengambil elemen dari HTML berdasarkan ID-nya
const inputNama = document.getElementById('inputNama');
const btnSapa = document.getElementById('btnSapa');
const hasilSapaan = document.getElementById('hasilSapaan');
const btnTema = document.getElementById('btnTema');

// 1. Logika saat tombol "Sapa Saya" diklik
btnSapa.addEventListener('click', function() {
    const nama = inputNama.value.trim();

    if (nama === "") {
        hasilSapaan.textContent = "Silakan ketik namamu terlebih dahulu!";
        hasilSapaan.style.color = "#dc3545"; // Warna merah untuk peringatan
    } else {
        hasilSapaan.textContent = `Halo, ${nama}! Semangat belajar coding web-nya!`;
        hasilSapaan.style.color = "#007bff"; // Warna biru
    }
});

// 2. Logika saat tombol "Ubah Tema" diklik
btnTema.addEventListener('click', function() {
    // Menambah atau menghapus class 'dark-mode' pada tag <body>
    document.body.classList.toggle('dark-mode');

    // Mengubah teks tombol sesuai tema yang aktif
    if (document.body.classList.contains('dark-mode')) {
        btnTema.textContent = "Ubah ke Mode Terang";
    } else {
        btnTema.textContent = "Ubah ke Mode Gelap";
    }
});
