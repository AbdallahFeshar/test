import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  imgSrc1:string='./assets/poert1.png';
  imgAlt1:string='home';
  imgSrc2:string='./assets/port2.png';
  imgAlt2:string='cake';
  imgSrc3:string='./assets/port3.png';
  imgAlt3:string='company';

}
