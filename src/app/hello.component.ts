import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  listJurusan = [{
    namaJurusan: 'Informatika',
    penjelasan: 'Belajar mengenai program'
  },
  {
    namaJurusan: 'Keuangan',
    penjelasan: 'Belajar mengenai keuangan'
  }];
}
