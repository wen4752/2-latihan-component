import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-halaman-input',
  templateUrl: './halaman-input.component.html',
  styleUrls: ['./halaman-input.component.css']
})
export class HalamanInputComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  inputJurusan: string;
  inputPenjelasan: string;
  submit() {


    this.router.navigate(['/halaman-input', this.inputJurusan,this.inputPenjelasan]);


  }

}