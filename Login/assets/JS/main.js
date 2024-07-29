// Event listener untuk tombol Sign Up dan Sign In
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Tambahkan kelas untuk efek panel geser
signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

// Fungsi untuk menangani pendaftaran
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Simpan data pengguna ke local storage
    localStorage.setItem('user', JSON.stringify({ name, email, password }));

    alert('Registration successful! You can now login.');
    container.classList.remove('right-panel-active');
});

// Fungsi untuk menangani login
function goTo() {
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Ambil data pengguna dari local storage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Validasi login
    if (storedUser && storedUser.email === email && storedUser.password === password) {
        if (email === 'admin@gmail.com' && password === 'admin123') {
            // Redirect ke halaman admin
            window.location.href = '/assets/page/admin.html';
        } else {
            // Redirect ke halaman user
            window.location.href = '/assets/page/user.html';
        }
    } else {
        message.textContent = 'Username atau password salah!';
    }
}

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah submit form yang sebenarnya
    goTo();
});
