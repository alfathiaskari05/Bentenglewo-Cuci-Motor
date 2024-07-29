document.addEventListener('DOMContentLoaded', function() {
    // Ambil data terakhir dari Local Storage
    let orders = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [];
    if (orders.length > 0) {
        const lastOrder = orders[orders.length - 1];
        const jenis_motor = lastOrder.jenis_motor;
        let totalHarga;
        switch (jenis_motor) {
            case 'kecil':
                totalHarga = 'Rp.20.000';
                break;
            case 'besar':
                totalHarga = 'Rp.25.000';
                break;
            case 'trabas':
                totalHarga = 'Rp.30.000';
                break;
        }
        // Tampilkan total harga
        document.getElementById('totalHarga').textContent = 'Total Harga: ' + totalHarga;
    } else {
        document.getElementById('totalHarga').textContent = 'Tidak ada pesanan ditemukan.';
    }

    // Tambahkan event listener untuk tombol konfirmasi
    const confirmButton = document.getElementById('confirmButton');
    if (confirmButton) {
        confirmButton.addEventListener('click', function() {
            // Redirect ke halaman user.html
            window.location.href = '/assets/page/user.html'; // Sesuaikan dengan path yang benar
        });
    }
});