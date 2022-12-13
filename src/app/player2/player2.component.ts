import { Component,Output,EventEmitter } from '@angular/core';
import { ControllerfuncService } from '../controllerfun.service';

@Component({
  selector: 'app-player2',
  templateUrl: './player2.component.html',
  styleUrls: ['./player2.component.css']
})
export class Player2Component {
  constructor(private t:ControllerfuncService){}
  public pi : number = 9;
  public pj : number = 0;
  public ra : number = 0;
  public row : number =1;
  public counter : number =1;
  public cran : number=0;
  public message_show : string='';

  @Output() public childevent2 = new EventEmitter();
  @Output() public childevent3 = new EventEmitter();
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
       this.cran = this.t.randomnumber;
       if(this.counter == 100){
        console.log(this.t.value_message);
        this.message_show=this.t.value_message;
       }
   /* console.log("THe changed values")
    console.log(this.pi)
    console.log(this.pj)
    if(this.pi==7 && this.pj==2){
      this.pi=3;
      this.pj=6;
      this.ra=7;
      this.row=this.row-1;
      this.counter=67;
    }*/
    this.childevent2.emit(this.pi);
    this.childevent3.emit(this.pj);
    this.ra=0;
  }
}
