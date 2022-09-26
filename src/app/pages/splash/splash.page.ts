import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  auth:boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.redirect();
  }

  redirect(){

    if(!this.auth){
      this.delay(1000);
      this.router.navigate(['/login']);
    }else{
      this.delay(1000);
      this.router.navigate(['/help-On']);
    }
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
}
