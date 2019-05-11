import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  employers = [
    {
      name: 'Alan Albuquerque',
      photoURL: 'assets/mock/alan.jpeg'
    },
    {
      name: 'Rodrigo Venturi',
      photoURL: 'assets/mock/rodrigo.jpeg'
    },
    {
      name: 'Erick Oliveira',
      photoURL: 'assets/mock/erick.png'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
