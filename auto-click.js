(function() {
    function performClicks() {
        // Mencari tombol close berdasarkan data-testid
        const closeButton = document.querySelector('button[data-testid="action-button-1"]');
        if (closeButton) {
            closeButton.click();
            console.log('Tombol close diklik');
            
            // Menunggu tombol "I'm sure" muncul
            setTimeout(() => {
                const confirmButton = document.querySelector('div._btnInternal_vsco8_54');
                if (confirmButton && confirmButton.textContent.includes("I'm sure")) {
                    confirmButton.click();
                    console.log('Tombol "I\'m sure" diklik');
                } else {
                    console.log('Tombol "I\'m sure" tidak ditemukan');
                }
            }, 1000); // Menunggu 1 detik untuk tombol konfirmasi muncul
        } else {
            console.log('Tombol close tidak ditemukan');
        }
    }
    
    // Menjalankan fungsi setiap 1 menit (60000 milidetik)
    setInterval(performClicks, 60000); // <-- NILAI DIUBAH DI SINI
    
    // Jalankan sekali pada awal
    performClicks();
    
    // Pesan log juga diubah untuk konsistensi
    console.log('Script telah aktif! Akan mengklik tombol setiap 1 menit.'); // <-- PESAN DIUBAH DI SINI
})();
