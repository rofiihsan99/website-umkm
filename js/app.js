"use strict";

//  Data Produk UMKM Cafe Sore 
const produkUmkm = [
  { nama: "Kopi Susu Sore", kategori: "Kopi", harga: 15000, stok: 12, unggulan: true },
  { nama: "Americano Senja", kategori: "Kopi", harga: 12000, stok: 4, unggulan: false },
  { nama: "Matcha Latte Sore", kategori: "Non-Kopi", harga: 18000, stok: 0, unggulan: false },
  { nama: "Roti Bakar Sore", kategori: "Snack", harga: 12000, stok: 8, unggulan: true }
];

console.log("P09 JavaScript aktif");
console.table(produkUmkm);

// format Rupiah
const formatRupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0
});

// 3. Helper Status Stok
function statusStok(stok) {
  if (stok === 0) {
    return { label: "Habis", className: "empty" };
  }
  if (stok <= 5) {
    return { label: "Stok terbatas", className: "warning" };
  }
  return { label: "Tersedia", className: "" };
}

// 4. Helper Label Kategori
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

// 5. Function ke DOM
function renderProduk() {
  const grid = document.querySelector("#produk-dinamis");
  const ringkasan = document.querySelector("#produk-ringkasan");

  if (!grid || !ringkasan) {
    return;
  }

  let jumlahTersedia = 0;
  let markup = "";

  for (const produk of produkUmkm) {
    const status = statusStok(produk.stok);
    const kategoriText = labelKategori(produk.kategori);
    const labelAksi = produk.stok > 0 ? "Siap dipesan" : "Hubungi admin";
    const badgeUnggulan = produk.unggulan ? `<span class="badge-featured">Unggulan</span>` : "";

    if (produk.stok > 0) {
      jumlahTersedia += 1;
    }

    markup += `
      <article class="js-product-card">
        ${badgeUnggulan}
        <h3>${produk.nama}</h3>
        <p>${kategoriText}</p>
        <p class="price">${formatRupiah.format(produk.harga)}</p>
        <span class="stock-badge ${status.className}">${status.label}</span>
        <p><small>${labelAksi}</small></p>
      </article>
    `;
  }

  grid.innerHTML = markup;
  ringkasan.textContent = `${jumlahTersedia} produk tersedia dari ${produkUmkm.length} data.`;
}

document.addEventListener("DOMContentLoaded", renderProduk);