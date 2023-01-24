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
  }
  almacenar(){
    this.nombre = localStorage.getItem("nombre".toString())
    this.apellido = localStorage.getItem("apellido".toString())
    this.direccion = localStorage.getItem("direccion".toString())
    this.celular = localStorage.getItem("celular".toString())
    this.edad = localStorage.getItem("edad".toString())
  }
}

