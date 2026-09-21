document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const nama = document.getElementById("nama").value;
            const email = document.getElementById("email").value;
            alert("Preview Form Kontak:\nNama: " + nama + "\nEmail: " + email);
        });
    }
});