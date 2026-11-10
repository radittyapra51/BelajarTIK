// 1. Pilih tombol berdasarkan ID-nya
const tombolSapa = document.getElementById('sapabutton');

// 2. Tambahkan 'event listener' untuk aksi 'click' yang benar
tombolSapa.addEventListener('click', function() {
  // 3. Jalankan kode ini ketika tombol di-klik
  alert('Halo! Terima kasih sudah berkunjung ke web orang ganteng!');
});
