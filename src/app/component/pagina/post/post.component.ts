import { Component } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Post } from '../../model/post';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {

  dataSource: any;
  
  displayedColumns = [
    'UserId',
    'Id',
    'Title',
    'Body'
  ];
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((resposta) =>{
      this.dataSource = resposta;
      console.log(this.dataSource);
      console.log(this.displayedColumns);
    })
  }

}
