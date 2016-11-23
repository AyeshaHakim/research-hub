import {Component, AfterViewInit} from "@angular/core";
import {OnInit} from "@angular/core";
import {DrupalService} from "../app.drupal.service";
import {Observable} from "rxjs/Rx";
import {SearchService} from "../app.search.service";
import { ActivatedRoute } from '@angular/router';
import {Http, Response, URLSearchParams, Headers} from "@angular/http";

@Component({
    templateUrl: './guidedetails.component.html'
})
export class GuidedetailsComponent implements OnInit, AfterViewInit {
    id: string;
    product:any;

  constructor(private http:Http, private searchService:SearchService, private drupalService: DrupalService, private route: ActivatedRoute) {
        let doheaders = new Headers();
        doheaders.set('Accept', 'application/json');
        this.id = this.route.snapshot.params['id'];

        this.http.get(this.drupalService.drupalUrl + "/" + this.id, {headers:doheaders})

        .map(res => res.json())
        .subscribe(
        data => this.product = data,
        err => console.log(err));
  }

  ngOnInit() {
  }
  ngAfterViewInit()
  {
    window.scrollTo(0,0);
  }
}
