import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  constructor() { }

  text:any;
  textlist:any[]=[
    {
      task: "Welcome add your texts",
      behaviour:"Style"
    },
  ]

  postText(){
    this.textlist.push({ task: this.text});
  }

  boldText(b){
    this.textlist.push({task:this.text ,behaviour:b })
   // console.log(b);
  }

  italicText(i){
    this.textlist.push({task:this.text ,behaviour:i })
   // console.log(i);
  }

  bolditalicText(bi){
    this.textlist.push({task:this.text ,behaviour:bi })
  }

  clearText(){
    this.textlist.splice(1, this.textlist.length);
  }

  ngOnInit() {
  }

}
