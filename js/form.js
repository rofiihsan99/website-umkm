document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            
            // Mengambil data input form secara lengkap
            const nama = document.getElementById("nama").value;
            const email = document.getElementById("email").value;
            const telepon = document.getElementById("telepon").value || "-";
            const paket = document.getElementById("paket").value;
            const topik = document.querySelector('input[name="topik"]:checked')?.value || "-";
            
            // Mengambil nilai checkbox 
            const waktuKontak = Array.from(document.querySelectorAll('input[name="waktu_kontak"]:checked'))
                .map(el => el.nextElementSibling.textContent.trim())
                .join(", ") || "-";
                
            const pesan = document.getElementById("pesan").value;
                       
            alert(
                "--- PREVIEW LENGKAP FORM ---\n" +
                "Nama: " + nama + "\n" +
                "Email: " + email + "\n" +
                "Telepon: " + telepon + "\n" +
                "Paket: " + paket + "\n" +
                "Topik: " + topik + "\n" +
                "Waktu Kontak: " + waktuKontak + "\n" +
                "Pesan: " + pesan
            );
        });
    }
});