import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  codeClient: string;
  dataSource: any;
  responseUpdate: any = null;

  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    public router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.codeClient = id;
      }
    })

    this.http.get('https://jsonplaceholder.typicode.com/posts/' + this.codeClient).subscribe((resposta) => {
      this.dataSource = resposta;
    })
  }

  editPost(form: NgForm) {

    const headers = new HttpHeaders().set('Content-type', 'application/json; charset=UTF-8');

    const options = { headers: headers };

    const registerUpdate = {
      userId: form['userId'],
      id: form['id'],
      title: form['title'],
      body: form['body']
    }

    if (form.valid) {
      this.http.put('https://jsonplaceholder.typicode.com/posts/' + this.codeClient, registerUpdate, options).subscribe((resposta) => {
        this.responseUpdate = resposta;
        console.log(this.responseUpdate);
        alert('Criado');
        this.listaPost();
      })
    }else{
      alert('Problema na ediçaõ do post');

    }
  }

  listaPost(){
    this.router.navigate(['post']);
  }

}