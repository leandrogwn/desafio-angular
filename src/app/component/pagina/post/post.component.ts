import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../../model/post';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {

  dataSource: any;
  displayButton: boolean;

  displayedColumns = [
    'UserId',
    'Id',
    'Title',
    'Body'
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((resposta) => {
      this.dataSource = resposta;
    })
  }

  enableEdit() {
    this.displayButton = !this.displayButton;
  }

}
