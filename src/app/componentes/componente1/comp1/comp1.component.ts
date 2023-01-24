import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Route, Router} from '@angular/router';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private nav:Router) {}
  nombre:any
  apellido:any
  direccion:any
  celular:any
  edad:any
  ngOnInit(): void {
    localStorage.clear();
  }
  Pagina2(){
    this.nav.navigate(['web'])
    this.almacenar()
  }
  almacenar(){
    localStorage.setItem('nombre',this.nombre.toString())
    localStorage.setItem('apellido',this.apellido.toString())
    localStorage.setItem('direccion',this.direccion.toString())
    localStorage.setItem('celular',this.celular.toString())
    localStorage.setItem('edad',this.edad.toString())
  }
}

