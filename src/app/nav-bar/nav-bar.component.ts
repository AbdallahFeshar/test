import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  myscrol:number=0;
  myscroll(x:any):void{   
  this.myscrol=  x.target.scrollingElement.scrollTop;
}
}
