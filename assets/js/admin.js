document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen form
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        // Tambahkan event listener untuk form submit
        orderForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Ambil data dari form
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const motor = document.getElementById('motor').value.trim();
            const time = document.getElementById('time').value.trim();
            const jenis_motor = document.getElementById('jenis_motor').value.trim();
            const tanggal = document.getElementById('tanggal').value.trim();

            // Periksa apakah semua input telah diisi
            if (!name || !phone || !motor || !time || !jenis_motor || !tanggal) {
                alert('Semua kolom harus diisi!');
                return;
            }

            // Buat objek data
            const order = {
                name,
                phone,
                motor,
                time,
                jenis_motor,
                tanggal
            };

            // Ambil data yang ada di Local Storage
            let orders = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [];

            // Tambahkan data baru
            orders.push(order);

            // Simpan kembali ke Local Storage
            localStorage.setItem('orders', JSON.stringify(orders));

            // Beri pesan berhasil
            alert('Data berhasil disimpan!');

            // Reset form setelah data disimpan
            orderForm.reset();

            // Redirect ke halaman lanjut (opsional, hapus jika tidak diperlukan)
            window.location.href = 'lanjut.html';
        });
    }

    // Fungsi untuk menghapus pesanan
    function deleteOrder(index) {
        // Ambil data dari Local Storage
        let orders = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [];

        // Hapus data berdasarkan index
        orders.splice(index, 1);

        // Simpan kembali ke Local Storage
        localStorage.setItem('orders', JSON.stringify(orders));

        // Refresh tabel data
        renderOrders();
    }

    // Fungsi untuk merender data pesanan
    function renderOrders() {
        // Ambil data dari Local Storage
        let orders = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [];

        // Ambil elemen tbody
        const orderTable = document.getElementById('orderTable');
        orderTable.innerHTML = ''; // Kosongkan tabel sebelum merender ulang

        // Jika tidak ada data, tampilkan pesan
        if (orders.length === 0) {
            const noDataRow = document.createElement('tr');
            const noDataCell = document.createElement('td');
            noDataCell.setAttribute('colspan', '7');
            noDataCell.textContent = 'Tidak ada data pesanan.';
            noDataRow.appendChild(noDataCell);
            orderTable.appendChild(noDataRow);
        } else {
            // Tampilkan data pesanan
            orders.forEach((order, index) => {
                const row = document.createElement('tr');

                const nameCell = document.createElement('td');
                nameCell.textContent = order.name;
                row.appendChild(nameCell);

                const phoneCell = document.createElement('td');
                phoneCell.textContent = order.phone;
                row.appendChild(phoneCell);

                const motorCell = document.createElement('td');
                motorCell.textContent = order.motor;
                row.appendChild(motorCell);

                const timeCell = document.createElement('td');
                timeCell.textContent = order.time;
                row.appendChild(timeCell);

                const jenisMotorCell = document.createElement('td');
                jenisMotorCell.textContent = order.jenis_motor;
                row.appendChild(jenisMotorCell);

                const tanggalCell = document.createElement('td');
                tanggalCell.textContent = order.tanggal;
                row.appendChild(tanggalCell);

                // tombol hapus
                const actionCell = document.createElement('td');
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Hapus';
                deleteButton.onclick = function() {
                    deleteOrder(index);
                };
                actionCell.appendChild(deleteButton);
                row.appendChild(actionCell);

                orderTable.appendChild(row);
            });
        }
    }

    renderOrders();
});

function toggleMenu() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('active');
}

document.getElementById('menu-toggle').addEventListener('click', function () {
    var navList = document.getElementById('nav-list');
    navList.classList.toggle('active');
    this.classList.toggle('hidden');
});

document.getElementById('close-menu').addEventListener('click', function () {
    var navList = document.getElementById('nav-list');
    navList.classList.remove('active');
    document.getElementById('menu-toggle').classList.remove('hidden');
});


