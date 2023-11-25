import { Component } from '@angular/core';

@Component({
  selector: 'app-form-basic',
  templateUrl: './form-basic.component.html',

})
export class FormBasicComponent {
  public nombre:string="";
  public contrasena:string="";

  public validar=(nombre:string,contrasena:string):void=>{
    if(nombre.length<=0 || contrasena.length<=0){
      alert("tiene que llenar los campos");
      return;
    }

  }
}
