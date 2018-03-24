import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-poz-bio-preview',
  templateUrl: './poz-bio-preview.component.html',
  styleUrls: ['./poz-bio-preview.component.css']
})
export class PozBioPreviewComponent implements OnInit {

  public pozBio: any;
  public id: number;

  constructor(public http:Http, private route: ActivatedRoute) { }

  ngOnInit() {

    this.pozBio = this.route.params.subscribe(params => {
      this.id = +params['id'];
      
      this.http.get('/app/vratiJedan/'+this.id).map(res => res.json()).subscribe((data) => {
        this.pozBio = data;
      });
      
    });
  }

}
