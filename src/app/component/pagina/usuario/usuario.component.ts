import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private http: HttpClient) { }

  dataSource: any;

  displayedColumns = ['id','name','username','email','city'];


  
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((resposta)=>{
      this.dataSource = resposta;
      console.log(resposta);
    })
  }
  
}
