import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
somthing:any;
  constructor() { }

  ngOnInit() {
    //console.log("ghdshgakfhdkaf");
   let action = window.localStorage.getItem('products');
   this.somthing = JSON.parse(action);
   console.log(this.somthing);
  }

}
