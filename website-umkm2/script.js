document.addEventListener('DOMContentLoaded', () => {
    const sapaButton = document.getElementById('sapaButton');
    const modal = document.getElementById('baristaModal');
    const closeModal = document.getElementById('closeModal');
    const okModalBtn = document.getElementById('okModalBtn');

    if (sapaButton && modal) {
        // Buka saat tombol diklik
        sapaButton.addEventListener('click', () => {
            modal.style.display = 'block';
        });

        // Tutup  tombol X diklik
        if (closeModal) {
            closeModal.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }

        // Tutup OK diklik
        if (okModalBtn) {
            okModalBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }

        // Tutup modal jika area di luar kotak modal diklik
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});