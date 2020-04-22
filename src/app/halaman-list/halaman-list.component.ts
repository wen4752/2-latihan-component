import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-halaman-list',
  templateUrl: './halaman-list.component.html',
  styleUrls: ['./halaman-list.component.css']
})
export class HalamanListComponent implements OnInit {

  constructor(private route :ActivatedRoute) { }
  hasil = [{}];
  ngOnInit() {
    let list = this.route.snapshot.paramMap.get('listJurusan');
    
  }

}