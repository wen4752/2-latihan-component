import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-halaman-list',
  templateUrl: './halaman-list.component.html',
  styleUrls: ['./halaman-list.component.css']
})
export class HalamanListComponent implements OnInit {

  constructor(private route :ActivatedRoute) { }
  listJurusan = [{
    namaJurusan: 'Informatika',
    penjelasan: 'Belajar mengenai program'
  },
  {
    namaJurusan: 'Keuangan',
    penjelasan: 'Belajar mengenai keuangan'
  }];
  ngOnInit() {
    let jur = this.route.snapshot.paramMap.get('jur');
    let pen = this.route.snapshot.paramMap.get('pen');
    
    
    this.listJurusan.push({
      namaJurusan : jur,
      penjelasan : pen
    });
  }

}