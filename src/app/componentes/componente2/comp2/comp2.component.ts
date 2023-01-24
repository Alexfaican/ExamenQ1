import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(nav:Router) { }
  nombre:any
  apellido:any
  direccion:any
  celular:any
  edad:any
  ngOnInit(): void {
    this.recuperar();
  }
recuperar(){
  this.nombre = localStorage.setItem("nombre", this.nombre)
  this.apellido = localStorage.setItem("apellido", this.apellido)
  this.direccion = localStorage.setItem("direccion", this.direccion)
  this.celular = localStorage.setItem("celular", this.celular)
  this.edad = localStorage.setItem("edad", this.edad)
}
}
