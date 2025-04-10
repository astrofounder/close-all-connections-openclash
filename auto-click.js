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
    
    // Menjalankan fungsi setiap 12 menit
    setInterval(performClicks, 720000);
    
    // Jalankan sekali pada awal
    performClicks();
    
    console.log('Script telah aktif! Akan mengklik tombol setiap 12 menit.');
})(); 