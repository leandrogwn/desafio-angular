import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assinar',
  templateUrl: './assinar.component.html',
  styleUrls: ['./assinar.component.css']
})
export class AssinarComponent  {

 nome: string = "";
 email: string = "";

 enviarForm(form: NgForm){
  if(form.valid){
    console.log("Dados válidos, enviados com sucesso.");
  }else{
    console.log("Dados inválidos.");
  }
 }

}
