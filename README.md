# Auto-Click Script

Script JavaScript otomatis untuk mengklik tombol pada interval waktu tertentu.

## Fungsi

Script ini melakukan hal berikut:

* Mencari dan mengklik tombol dengan atribut `data-testid="action-button-1"`
* Setelah itu, mencari dan mengklik tombol konfirmasi yang berisi teks "I'm sure"
* Operasi ini dijalankan setiap 12 menit
* Script akan berjalan segera setelah dijalankan dan kemudian berulang pada interval yang ditentukan

## Cara Penggunaan

1. Buka halaman web target
2. Buka konsol developer browser (F12 atau klik kanan > Inspect > Console)
3. Salin dan tempel kode dari file `auto-click.js` ke dalam konsol
4. Tekan Enter untuk menjalankan script

## Catatan

Script ini akan terus berjalan selama halaman web masih terbuka dan akan otomatis mengklik tombol yang ditentukan pada interval 12 menit. 