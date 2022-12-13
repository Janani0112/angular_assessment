import { Injectable, OnInit } from '@angular/core';
import { AppComponent } from './app.component';
@Injectable({
  providedIn: 'root'
})
export class ControllerfuncService {
  constructor() {}
  b :number =9;
  r: number =1;
   pi : number=0;
   pj :number=0;
   randomnumber !: number;
   points !:  number;
   public value_message : string='';
   public snakehi : number = 2;
   public snakehj : number = 4;
   public ladderi : number = 7;
   public ladderj : number = 2;
   public winning : String='';
  onfun(pi : number,pj : number,rd: number,row: number,counter: number){
    this.randomnumber=rd;
    this.r=row;
    this.points=counter;
    
    for (let i = 0; i < rd; i++) {
     
      if(this.r%2!=0 && pj<=this.b){
        pj=pj+1;
        this.points=this.points+1;
        this.pj=pj;
        this.pi=pi;
      }
      if(this.r%2!=0 && this.pj>this.b){
        this.r=this.r+1;
        pi=pi-1;
        pj=pj-1;
        this.pi=pi;
        this.pj=pj;
        continue;
      }
      if(this.r%2==0 && this.pj>=0){
        pj=pj-1;
        this.points=this.points+1;
        this.pj=pj;
        this.pi=pi;
      }
      if(this.r%2==0 && this.pj<0){
        this.r=this.r+1;
        pi=pi-1;
        pj=0;
        this.pi=pi;
        this.pj=pj;
        continue;
      }
    }
    if(this.points == 100){
    this.value_message="Player Wins";
    }
    if(this.pi == this.ladderi && this.pj == this.ladderj){
      this.pi=3;
      this.pj=6;
      this.points=67;
      console.log("Ladderrr")
    }
    if(this.pi == this.snakehi && this.pj == this.snakehj){
      this.pi=5;
      this.pj=1;
      this.r=this.r-1;
      this.points=42;
      console.log("snakeee")
    }
  }
}