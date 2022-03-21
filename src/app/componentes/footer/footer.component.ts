import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 public fecha: string | undefined;
 public hora: string | undefined;

  constructor() { }

  ngOnInit(): void {
    var date = new Date();
    this.fecha= date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    this.hora= date.getHours()+":"+date.getMinutes();
    this.new_clock
    setTimeout(this.new_clock, 1)
  }
  

  new_clock(){ 
    var date = new Date();
    this.fecha= date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    this.hora= date.getHours()+":"+date.getMinutes();
  setTimeout(this.new_clock, 1)
  }

}


