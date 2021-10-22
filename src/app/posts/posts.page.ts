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
    },
  ]
  boldlist:any[]=[
    {
      task: "Welcome add your texts",
    },
  ]
  italiclist:any[]=[
    {
      task: "Welcome add your texts",
    },
  ]

  postText(){
    this.textlist.push({ task: this.text});
  }
  boldText(){
    //this.textlist.push({task:this.text.bold()})
    document.getElementById("output").style.fontWeight = "bold"
  }
  italicText(){
     //let italic=this.text.italics();
     //this.textlist.push({task:italic})
    document.getElementById("output").style.fontStyle = "italic";
    //document.getElementById('italic').innerHTML =this.text.italics();
    //console.log(op);
    //this.textlist.push({task:op})
  }
  clearText(){
    this.textlist.splice(1, this.textlist.length);
  }

  ngOnInit() {
  }

}
