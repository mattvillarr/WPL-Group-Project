import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from "@angular/common/http";

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit {

  idParam = String;
  item: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) { 
    this.idParam = this.route.snapshot.params.id;
    console.log(this.idParam);
  }

  ngOnInit() {
    // let itd = String(this.idParam);
    let itemId = "http://localhost:2345/products/" + this.idParam;
    this.http.get(itemId)
      .subscribe(response => {
        this.item = response;
        console.log(response);
        console.log("Results for " + this.idParam);
      });
      
      
  }

}
