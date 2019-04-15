import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  items = [
    {id: 0, name:'Superman'},
    {id: 1, name:'Batman'},
    {id: 3, name:'BatGirl'},
    {id: 4, name:'Robin'},
    {id: 5, name:'Flash'},
  ];

  constructor() { 
  }


  ngOnInit() {
  
  }

}
