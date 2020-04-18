import {   Directive, ElementRef, OnInit, HostListener, } from '@angular/core';
@Directive({
    selector:'[numberonly]'
})
export class NumbersOnly implements OnInit {
  constructor(private el:ElementRef){
     
  }
    ngOnInit(): void {
        console.log(this.el.nativeElement);
        // this.el.nativeElement.style="background-color:red";
       // this.el.nativeElement.type="checkbox";
    }
    @HostListener('keypress',['$event'])
    handleKeyPress(e){
        let regex = new RegExp(e.target.pattern);
        console.log(e);
        if(!regex.test(e.target.value)){
            this.el.nativeElement.style="background-color:red"
        }
        else{
            this.el.nativeElement.style="background-color:white"
        }
    }

}