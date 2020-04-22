import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-halaman-input',
  templateUrl: './halaman-input.component.html',
  styleUrls: ['./halaman-input.component.css']
})
export class HalamanInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listJurusan = [{
    namaJurusan: 'Informatika',
    penjelasan: 'Belajar mengenai program'
  },
  {
    namaJurusan: 'Keuangan',
    penjelasan: 'Belajar mengenai keuangan'
  }];
  inputJurusan: string;
  inputPenjelasan: string;
  submit() {
  this.listJurusan.push({
    namaJurusan : this.inputJurusan,
    penjelasan: this.inputPenjelasan
  });

    
  }

}