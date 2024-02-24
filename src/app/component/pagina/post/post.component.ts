import { Component, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {

  dataSource: any;
  displayButton: boolean;
  countCheckbox: number;
  selectAll = false;
  
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
    this.countCheckbox = 0;
    
    this.dataSource.forEach(item => {
      if (item.checked) {
        this.countCheckbox ++;
      };
    });
    
    this.countCheckbox == 1 ? this.displayButton = true : this.displayButton = false;
  }
  
  toogleSelectAll(){
    this.dataSource.forEach((item) => (item.checked = this.selectAll));
    this.enableEdit();
  }

}
