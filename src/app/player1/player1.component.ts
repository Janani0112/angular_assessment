import { Component, Output,EventEmitter, OnInit } from '@angular/core';
import { ControllerfuncService } from '../controllerfun.service';

@Component({
  selector: 'app-player1',
  templateUrl: './player1.component.html',
  styleUrls: ['./player1.component.css']
})
export class Player1Component implements OnInit{
  constructor(private t:ControllerfuncService){}
  public pi : number = 9;
  public pj : number = 0;
  public ra !: number;
  public row : number =1;
  public counter : number =1;
  public ran : number=0;
  public message_show : string ='';
  
  @Output() public childevent = new EventEmitter();
  @Output() public childevent1 = new EventEmitter();
  
  public gotblock : boolean=false;
  isStop(){
    return this.gotblock;
  }

  onPlay(){
    
    //this.ra=Math.floor(Math.random() * 6);
    
      this.ra=Math.floor(Math.random() * 6)+1;
    console.log("Random_Value_" + this.ra);
    this.t.onfun(this.pi,this.pj,this.ra,this.row,this.counter)
      this.t.getvalue(false)
      this.gotblock=true;
       this.pi=this.t.pi;
       this.pj=this.t.pj;
       this.row=this.t.r;
       this.counter=this.t.points;
       this.ran=this.t.randomnumber;
       if(this.counter == 100){
        console.log(this.t.value_message);
        this.message_show=this.t.value_message;
       }
  this.childevent.emit(this.pi);
  this.childevent1.emit(this.pj);

    //this.ra=0;
  }
  // valuegot:number=0;
  // onsubs(){
  //   this.t.messageserve.subscribe((data) => {
  //     this.valuegot = data;
  //     console.log(this.valuegot)
  //   });
  // }
  ngOnInit(){
    this.t.blockevent.subscribe((val)=>{
      this.gotblock=val;
    })
    this.childevent.emit(this.pi);
    this.childevent1.emit(this.pj);
   
   
    
  
  }
}