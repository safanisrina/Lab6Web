// script.js 
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";
document.getElementById("tombolAksi").addEventListener("click", function () {
    pesan.textContent =
        "Tombol diklik pada " + new Date().toLocaleTimeString();
});

const teksGaya = document.getElementById("teksGaya");
document.getElementById("tombolGaya").addEventListener("click", function () {
    teksGaya.classList.toggle("highlight");
    teksGaya.classList.toggle("teks-besar");
});

const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
    jumlahKarakter.textContent = namaInput.value.length;
});
const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const formPendaftaran = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

formPendaftaran.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const usiaInput = document.getElementById("usia").value;
    const usia = Number(usiaInput);

    if (nama === "") {
        pesanForm.textContent = "Nama wajib diisi.";
    } else if (!polaEmail.test(email)) {
        pesanForm.textContent = "Masukkan email yang valid.";
    } else if (
        usiaInput === "" ||
        !Number.isInteger(usia) ||
        usia < 17 ||
        usia > 100
    ) {
        pesanForm.textContent =
            "Usia harus berupa bilangan bulat 17–100.";
    } else {
        pesanForm.textContent =
            "Validasi berhasil. Form siap diproses.";

        formPendaftaran.reset();
    }
});

formPendaftaran.addEventListener("reset", function () {
    pesanForm.textContent = "";
});
const inputTugas = document.getElementById("inputTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

document.getElementById("tambahTugas").addEventListener("click", function () {
    const teks = inputTugas.value.trim();

    if (teks === "") {
        pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
        return;
    }
    const item = document.createElement("li");
    const label = document.createElement("span");
    const selesai = document.createElement("button");
    const hapus = document.createElement("button");

    label.textContent = teks + " ";
    selesai.type = "button";
    selesai.textContent = "Tandai selesai";
    selesai.addEventListener("click", function () {
        item.classList.toggle("selesai");
        selesai.textContent = item.classList.contains("selesai")
            ? "Batalkan selesai"
            : "Tandai selesai";
    });
    hapus.type = "button";
    hapus.textContent = "Hapus";
    hapus.className = "secondary";
    hapus.addEventListener("click", function () {
        item.remove();
        pesanTugas.textContent = "Tugas dihapus.";
    });

    item.append(label, selesai, hapus);
    daftarTugas.appendChild(item);

    inputTugas.value = "";
    pesanTugas.textContent = "Tugas ditambahkan.";
    inputTugas.focus();
});
const formWorkshop = document.getElementById("formWorkshop");
const namaWorkshop = document.getElementById("namaWorkshop");
const emailWorkshop = document.getElementById("emailWorkshop");
const sesiWorkshop = document.getElementById("sesiWorkshop");
const pesanWorkshop = document.getElementById("pesanWorkshop");
namaWorkshop.addEventListener("input", function () {
    document.getElementById("jumlahNamaWorkshop").textContent =
        namaWorkshop.value.length;
});
sesiWorkshop.addEventListener("change", function () {
    document.getElementById("sesiDipilih").textContent =
        sesiWorkshop.value
            ? "Sesi yang dipilih: " + sesiWorkshop.value
            : "Sesi yang dipilih: belum ada";
});
formWorkshop.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = namaWorkshop.value.trim();
    const email = emailWorkshop.value.trim();

    if (nama.length < 3) {
        pesanWorkshop.textContent =
            "Nama harus diisi minimal 3 karakter.";
    } else if (!polaEmail.test(email)) {
        pesanWorkshop.textContent = "Masukkan email yang valid.";
    } else if (sesiWorkshop.value === "") {
        pesanWorkshop.textContent =
            "Silakan pilih sesi workshop.";
    } else {
        pesanWorkshop.textContent =
            "Pendaftaran workshop berhasil divalidasi.";
    }
});
formWorkshop.addEventListener("reset", function () {
    pesanWorkshop.textContent = "";
    document.getElementById("jumlahNamaWorkshop").textContent = "0";
    document.getElementById("sesiDipilih").textContent =
        "Sesi yang dipilih: belum ada";
});
document.getElementById("tombolToggle").addEventListener("click", function () {
    document.getElementById("paragrafToggle")
        .classList.toggle("sembunyi");
});