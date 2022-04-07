import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives-and-pipes';
  types = ['danger','dark','info','light','primary', 'secondary','success','warning'];
  counts = Array<number>(this.types.length).fill(0);
  onAlertClicked(index:number){
    this.counts[index]++;
    console.log(index, ', ' + this.counts[index]);
  }
}
