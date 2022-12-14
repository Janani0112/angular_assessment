import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'snakegame';
  val:number=1;
  arr =new Array();
  mess:number=0;
  mess1:number=0;
  mess2:number=0;
  mess3:number=0;
  board(){
    let num=100;
        for (let i = 0; i< 10; i++) {
            for(let j = 0; j< 10; j++) {
                this.arr[i] = [];
            }
        }
        for (let i = 0; i< 10; i++) {
          if(i%2!=0){
            for(let j =9; j>=0; j--) {
              this.arr[i][j] = num;
              num--;
          }
          }
          else{
            for(let j = 0; j< 10; j++) {
              this.arr[i][j] = num;
              num--;
          }
          }
      }
      console.log(this.arr);
  }

      snackcheck(st : number){
        if(st== 76 || st ==42){
          return true;
        }
        return false;
      }

      laddercheck(lt : number){
        if(lt == 23 || lt == 67){
          return true;
        }
        return false;
      }
      trackp1(p1l : number){
        if(p1l == this.arr[this.mess][this.mess1]){
          return true;
        }
        return false;
      }
      trackp2(p2l : number){
        if(p2l == this.arr[this.mess2][this.mess3]){
          return true;
        }
        return false;
      }

      ngOnInit(){
        this.board();
      }
  }    