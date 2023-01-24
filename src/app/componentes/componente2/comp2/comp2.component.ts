import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(nav:Router) { }
  nombre:String
  apellido:String
  direccion:String
  celular:String
  edad:String
  ngOnInit(): void {
    this.recuperar();
  }
recuperar(){
  this.nombre = localStorage.getItem('nombre')
  this.apellido = localStorage.getItem('apellido')
  this.direccion = localStorage.getItem('direccion')
  this.celular = localStorage.getItem('celular')
  this.edad = localStorage.getItem('edad')
}
}
