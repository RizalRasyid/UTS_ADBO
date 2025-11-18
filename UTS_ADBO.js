class Cuti {
  constructor(nama, kuota) {
    this.nama = nama;
    this.kuota = kuota;
  }
}

class Karyawan {
  constructor(nama) {
    this.nama = nama;
    this.kuotas = {
      'Tahunan': 12,
      'Sakit': 2,
      'Melahirkan': 90
    };
  }

  ajukanCuti(jenis, hari) {
    if (!this.kuotas[jenis]) return "Jenis cuti tidak dikenali";
    if (hari > this.kuotas[jenis]) return "Kuota anda tidak cukup untuk mengajukan cuti ini";

    this.kuotas[jenis] -= hari;
    return `Cuti ${jenis.toLowerCase()} disetujui untuk ${hari} hari`;
  }
}

// Contoh penggunaan
const karyawan = new Karyawan("Budi");
console.log(karyawan.ajukanCuti('Tahunan', 5)); // Cuti tahunan disetujui untuk 5 hari
console.log(karyawan.ajukanCuti('Tahunan', 8)); // Kuota anda tidak cukup untuk mengajukan cuti ini
