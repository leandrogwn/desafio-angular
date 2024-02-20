import { Component } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastroPost',
  templateUrl: './cadastroPost.component.html',
  styleUrls: ['./cadastroPost.component.css']
})
export class CadastroPostComponent {

  result: any;

  constructor(private http: HttpClient,
    public router: Router) { }

  enviarPost(form: NgForm) {

    const headers = new HttpHeaders().set('Content-type', 'application/json; charset=UTF-8');

    const options = { headers: headers };

    const dados = {
      userId: form['userId'],
      id: form['id'],
      title: form['title'],
      body: form['body']
    }

    if (form.valid) {
      this.http.post('https://jsonplaceholder.typicode.com/posts', dados, options).subscribe((resposta) => {
        this.result = resposta;
        alert('Criado');
        console.log(this.result);
        this.listaPost();
      })
    } else {
      alert('Não foi possível realizar a postagem');
    }
  }
  
  listaPost(){
    this.router.navigate(['post']);
  }
}
