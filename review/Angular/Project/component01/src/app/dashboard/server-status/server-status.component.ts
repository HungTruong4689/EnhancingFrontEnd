import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit{
  currentStatus : 'online'| 'offline' | 'unknown' = 'online';
  private interval? :ReturnType<typeof setInterval>;

  constructor(){
    
  }

  ngOnInit(){
    console.log('on init');
    this.interval =setInterval(() => {
      const rnd = Math.random();
      if(rnd<0.5){
        this.currentStatus = 'online';
      }else if(rnd<0.9){
        this.currentStatus = 'offline';
      }else{
        this.currentStatus = 'unknown';
      }
    },3000);
  }
  ngViewAfterInit(){
    console.log('after init');
  }

  ngOnDestroy(){
    console.log('destroy');
    if(this.interval){
      clearInterval(this.interval);
    }
  }
}
