import { Component, Output,EventEmitter } from '@angular/core';
import { ControllerfuncService } from '../controllerfun.service';

@Component({
  selector: 'app-player1',
  templateUrl: './player1.component.html',
  styleUrls: ['./player1.component.css']
})
export class Player1Component {
  constructor(private t:ControllerfuncService){}
  public pi : number = 9;
  public pj : number = 0;
  public ra : number = 0;
  public row : number =1;
  public counter : number =1;
  public ran : number=0;
  public message_show : string ='';
  @Output() public childevent = new EventEmitter();
  @Output() public childevent1 = new EventEmitter();
  onPlay(){
    
    //this.ra=Math.floor(Math.random() * 6);
    while(this.ra == 0){
      this.ra=Math.floor(Math.random() * 6);
    }
    console.log("Random_Value_" + this.ra);
    this.t.onfun(this.pi,this.pj,this.ra,this.row,this.counter)
       this.pi=this.t.pi;
       this.pj=this.t.pj;
       this.row=this.t.r;
       this.counter=this.t.points;
       this.ran=this.t.randomnumber;
       if(this.counter == 100){
        console.log(this.t.value_message);
        this.message_show=this.t.value_message;
       }
   // console.log("THe changed values")
   // console.log(this.pi)
   // console.log(this.pj)
  /*  if(this.pi==7 && this.pj==2){
      console.log("Encountered ladder")
      this.pi=3;
      this.pj=6;
      this.ra=7;
      this.counter=67;
    }
    if(this.pi==2 && this.pj==4){
      console.log("Encountered snake")
      this.pi=7;
      this.pj=2;
      this.ra=7;
      this.counter=42;
    }*/
  this.childevent.emit(this.pi);
  this.childevent1.emit(this.pj);
  
    this.ra=0;
  }
}