import { Component,Output,EventEmitter, OnInit } from '@angular/core';
import { ControllerfuncService } from '../controllerfun.service';

@Component({
  selector: 'app-player2',
  templateUrl: './player2.component.html',
  styleUrls: ['./player2.component.css']
})
export class Player2Component implements OnInit{
  constructor(private t:ControllerfuncService){}
  public pi : number = 9;
  public pj : number = 0;
  public ra !: number;
  public row : number =1;
  public counter : number =1;
  public cran : number=0;
  public message_show : string='';

  public gotblock : boolean =false;
  isStop(){
    return this.gotblock;
  }

  //gotblock=this.t.getvalue().
  @Output() public childevent2 = new EventEmitter();
  @Output() public childevent3 = new EventEmitter();
  onPlay(){
    
    //this.ra=Math.floor(Math.random() * 6);
    
      this.ra=Math.floor(Math.random() * 6)+1;

    console.log("Random_Value_" + this.ra);
    this.t.onfun(this.pi,this.pj,this.ra,this.row,this.counter)
       this.pi=this.t.pi;
       this.pj=this.t.pj;
       this.row=this.t.r;
       this.t.getvalue(false);
       this.gotblock=true;
       this.counter=this.t.points;
       this.cran = this.t.randomnumber;
       if(this.counter == 100){
        console.log(this.t.value_message);
        this.message_show=this.t.value_message;
       }
    this.childevent2.emit(this.pi);
    this.childevent3.emit(this.pj);
    //this.ra=0;
  }

  ngOnInit(){
    // this.t.getvalue.subscribe((data) => {
    //       this.gotblock = data}
    // );
    this.t.blockevent.subscribe((val)=>{
      this.gotblock=val;
    })
    this.childevent2.emit(this.pi);
    this.childevent3.emit(this.pj);
    // this.t.getvalue().subscribe((data) =>{
    //   this.gotblock = data;
    // });
  }
}
