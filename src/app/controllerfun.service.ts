import { outputAst } from '@angular/compiler';
import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { Subject } from 'rxjs';
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


   blockevent = new EventEmitter<boolean>();

  getvalue(val : boolean){
    this.blockevent.emit(val);
  }


  onfun(pi : number,pj : number,rd: number,row: number,counter: number){
    this.randomnumber=rd;
    this.r=row;
    this.points=counter;
    if(this.points+rd>100){
      this.pi=pi;
      this.pj=pj;
      this.r=row;
      this.points=counter;
      return;
    }
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
    setTimeout(() => this.resetwindow(),100);
    }
    if(this.pi == this.ladderi && this.pj == this.ladderj){
      this.pi=3;
      this.pj=6;
      this.points=67;
    }
    if(this.pi == this.snakehi && this.pj == this.snakehj){
      this.pi=5;
      this.pj=1;
      this.r=this.r-1;
      this.points=42;
    }
  }
resetwindow(){
  alert("Game Over");
  window.location.reload();
}
}