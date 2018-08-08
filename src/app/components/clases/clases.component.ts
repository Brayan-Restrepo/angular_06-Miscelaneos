import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

  public alerta: string;
  public propiedades: object;
  public loading: boolean;

  constructor() {
    this.alerta = 'alert-danger';
    this.propiedades = {
      danger: false
    };
    this.loading = false;
   }

  ngOnInit() {
  }

  public ejecutar(): void {
    this.loading = true;
    setTimeout( () => this.loading = false, 3000 );
  }
}
