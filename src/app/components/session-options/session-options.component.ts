import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-options',
  templateUrl: './session-options.component.html',
  styleUrls: ['./session-options.component.scss']
})
export class SessionOptionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public imgLogo: string = '../assets/images/session_logo_3.png';

}
