"use strict";

// 1. Data Produk UMKM Cafe Sore 
const produkUmkm = [
  { nama: "Kopi Susu Sore", kategori: "Kopi", harga: 15000, stok: 12, unggulan: true },
  { nama: "Americano Senja", kategori: "Kopi", harga: 12000, stok: 4, unggulan: false },
  { nama: "Matcha Latte Sore", kategori: "Non-Kopi", harga: 18000, stok: 0, unggulan: false },
  { nama: "Roti Bakar Sore", kategori: "Snack", harga: 12000, stok: 8, unggulan: true }
];

// 2. Function Contract, Format Rupiah
function formatRupiah(nilai) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(nilai);
}

// 3. Function Contract, Penentu Status Stok
function statusStok(stok) {
  if (stok <= 0) {
    return { label: "Habis", className: "empty" };
  }
  if (stok <= 5) {
    return { label: "Stok terbatas", className: "warning" };
  }
  return { label: "Tersedia", className: "available" };
}

// 4. Function Helper: Label Kategori
function labelKategori(kategori) {
  switch (kategori) {
    case "Kopi":
      return "Kopi Pilihan";
    case "Non-Kopi":
      return "Minuman Segar";
    case "Snack":
      return "Camilan Teman Kopi";
    default:
      return "Menu UMKM";
  }
}

// 5. Function Contract,Kartu Produk 
function buatKartuProduk(produk) {
  const status = statusStok(produk.stok);
  const kategoriText = labelKategori(produk.kategori);
  const labelAksi = produk.stok > 0 ? "Siap dipesan" : "Hubungi admin";
  const badgeUnggulan = produk.unggulan ? `<span class="badge-featured">Unggulan</span>` : "";

  return `
    <article class="js-product-card">
      ${badgeUnggulan}
      <h3>${produk.nama}</h3>
      <p>${kategoriText}</p>
      <p class="price">${formatRupiah(produk.harga)}</p>
      <span class="stock-badge ${status.className}">${status.label}</span>
      <p><small>${labelAksi}</small></p>
    </article>
  `;
}

// 6. Function Utama, Render Produk ke DOM
function renderProduk() {
  const grid = document.querySelector("#produk-dinamis");
  const ringkasan = document.querySelector("#produk-ringkasan");
  const unggulan = document.querySelector("#produk-unggulan");

  // Guard condition  cegah error pada halaman selain produk.html
  if (!grid || !ringkasan) {
    console.warn("Target render produk tidak ditemukan di halaman ini.");
    return;
  }

  // Debugging log
  produkUmkm.forEach((produk) => {
    console.log("Debug produk:", produk.nama, "stok:", produk.stok);
  });

  // Pemrosesan Data Menggunakan Array Method,filter, find, map
  const produkTersedia = produkUmkm.filter((produk) => produk.stok > 0);
  const produkUnggulan = produkUmkm.find((produk) => produk.unggulan === true);
  const markupProduk = produkTersedia.map(buatKartuProduk).join("");

  // Update DOM
  grid.innerHTML = markupProduk;
  ringkasan.textContent = `${produkTersedia.length} produk tersedia dari ${produkUmkm.length} data.`;

  // Up teks produk 
  if (unggulan) {
    unggulan.textContent = produkUnggulan
      ? `Produk unggulan: ${produkUnggulan.nama}`
      : "Belum ada produk unggulan.";
  }

  // Inspeksi tabel 
  console.table(produkUmkm);
}

// run func jika dom siap
document.addEventListener("DOMContentLoaded", renderProduk);