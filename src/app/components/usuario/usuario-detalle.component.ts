import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      usuario-detalle works!
    </p>
  `,
  styles: []
})
export class UsuarioDetalleComponent implements OnInit {

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.parent.params.subscribe(
      params => {
        console.log('Hijo detalle');
        console.log(params);
      }
    );
  }

}
