import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public posts: {
    id: string;
    titlePost: string;
    contentPost: string;
    imagePost: string;
  }[] = [
      {
        id: '1',
        titlePost: 'Post One',
        contentPost: `There are many variations of passages of Lorem Ipsum available,
         but the majority have suffered alteration in some form, by injected humour, 
         or randomised words which don't look even slightly believable. If you are going 
          to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
          hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to
          repeat predefined chunks as necessary, making this the first true generator on the Internet.
          It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,
          to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
         free from repetition, injected humour, or non-characteristic words etc.`,
        imagePost: 'https://picsum.photos/id/237/200/300'
      },
      {
        id: '2',
        titlePost: 'Post Two',
        contentPost: `There are many variations of passages of Lorem Ipsum available,
         but the majority have suffered alteration in some form, by injected humour, 
         or randomised words which don't look even slightly believable. If you are going 
          to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
          hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to
          repeat predefined chunks as necessary, making this the first true generator on the Internet.
          It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,
          to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
         free from repetition, injected humour, or non-characteristic words etc.`,
        imagePost: 'https://picsum.photos/id/237/200/300'
      }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
