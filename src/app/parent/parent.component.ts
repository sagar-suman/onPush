import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
mutableArray:number[]=[];
immutableArray:number[]=[];
ctr:number=1;
ctr2:number=1;
  constructor() { }

  ngOnInit(): void {
    console.log('OnInit in Parent')
    
  }

  iHandler(ev:Event){
      this.immutableArray=[...this.immutableArray,this.ctr++]
  }

  mHandler(ev:Event){
    this.mutableArray.push(this.ctr2++);
    
  }

}
