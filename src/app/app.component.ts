import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(private router:Router){}


  
  hinput(){
    this.router.navigate(['/halaman-input']);
  }
  hedit(){
    this.router.navigate(['/halaman-edit']);
  }
  hlist(){
    this.router.navigate(['/halaman-list']);
  }
}
