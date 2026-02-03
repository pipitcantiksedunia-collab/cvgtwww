const toggleBtn = document.getElementById('theme-toggle');

// Ganti Tema
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Pesan saat tombol diklik
function pesan() {
    alert("Ciee mau hubungin ya? Cek email di kode HTML-nya dong!");
}

// Efek nama muncul pelan
document.addEventListener('DOMContentLoaded', () => {
    const name = document.getElementById('name');
    name.style.opacity = 0;
    setTimeout(() => {
        name.style.transition = "opacity 2s";
        name.style.opacity = 1;
    }, 500);
});