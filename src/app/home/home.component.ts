import { Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig] 
})
export class HomeComponent implements OnInit {
  isCollapsed = true;
  name = 'Angular ' + VERSION.major;
  
  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor( private router: Router,config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
   }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
logout(){}
}
