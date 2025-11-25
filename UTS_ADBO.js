class Cuti {
  constructor(nama, kuota) {
    this.nama = nama;
    this.kuota = kuota;
  }
  pengajuan(hari) {
    return "Pengajuan jenis cuti belum ditentukan.";
  }
  sisakuota(hari) {
    return this.kuota >= hari;
  }
}

class Tahunan extends Cuti {
  constructor(nama, kuota = 12) {
    super (nama, kuota);
  }
  pengajuan(hari) {
    if (!this.sisakuota(hari)) {
      return "Kuota anda tidak cukup untuk mengajukan cuti tahunan.";
    }
    this.kuota -= hari;
    return `${this.nama} mengajukan ${hari} hari cuti tahunan. Sisa kuota: ${this.kuota}`;
  }
}

class Sakit extends Cuti {
  constructor(nama, kuota = 2) {
    super (nama, kuota);
  }
  pengajuan(hari) {
    if (!this.sisakuota(hari)) {
      return "Kuota anda tidak cukup untuk mengajukan cuti sakit.";
    }
    this.kuota -= hari;
    return `${this.nama} mengajukan ${hari} hari cuti sakit. Sisa kuota: ${this.kuota}`;
  }
}

class Melahirkan extends Cuti {
  constructor(nama, kuota = 90) {
    super (nama, kuota);
  }
  pengajuan(hari) {
    if (!this.sisakuota(hari)) {
      return "Kuota anda tidak cukup untuk mengajukan cuti melahirkan.";
    }
    this.kuota -= hari;
    return `${this.nama} mengajukan ${hari} hari cuti melahirkan. Sisa kuota: ${this.kuota}`;
  }
}

const karyawan1 = new Tahunan("Dewi");
const karyawan2 = new Sakit("Budi");
const karyawan3 = new Melahirkan("Ayu");
console.log(karyawan1.pengajuan(11));
console.log(karyawan1.pengajuan(2));

console.log(karyawan2.pengajuan(1));
console.log(karyawan2.pengajuan(2));

console.log(karyawan3.pengajuan(57));
console.log(karyawan3.pengajuan(33));
