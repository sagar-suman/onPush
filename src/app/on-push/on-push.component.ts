import { Component, OnInit,ChangeDetectionStrategy,ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class OnPushComponent implements OnInit {
@Input() iProp!:string;
@Input() iData:any;
  constructor(private cdRef:ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log('onInit in onPush Component')

  }

  refreshMdata(){
    this.cdRef.detectChanges();
  }

}
