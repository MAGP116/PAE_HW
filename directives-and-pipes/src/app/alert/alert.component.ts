import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() content: String = "Alerta";
  @Input() type: String = "warning";
  @Output() clicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClicked(){
    this.clicked.emit();
  }

}
