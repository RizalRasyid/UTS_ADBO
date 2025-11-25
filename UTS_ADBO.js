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
//Cara Menggunakannya
//1. Nama untuk setiap karyawan dan jenis cuti
const nama1 = new Tahunan("Rizal");
const nama2 = new Sakit("Khoirul");
const nama3 = new Melahirkan("Nunu");
const nama4 = new Cuti("Asha");

//2. Panggil pengajuannya 
//Rizal
console.log(nama1.pengajuan(6));
console.log(nama1.pengajuan(4));
console.log(nama1.pengajuan(3));
//Khoirul
console.log(nama2.pengajuan(1));
console.log(nama2.pengajuan(2));
//Nunu
console.log(nama3.pengajuan(90));
console.log(nama3.pengajuan(7));
//Asha
console.log(nama4.pengajuan(100))
