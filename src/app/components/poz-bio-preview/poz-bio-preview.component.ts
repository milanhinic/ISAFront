import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { PozBioService } from '../../services/poz-bio.service';

@Component({
  selector: 'app-poz-bio-preview',
  templateUrl: './poz-bio-preview.component.html',
  styleUrls: ['./poz-bio-preview.component.css']
})
export class PozBioPreviewComponent implements OnInit {

  public pozBio: any;
  public id: number;

  constructor(private http:Http, private route: ActivatedRoute, private router: Router, private pozBioService: PozBioService) { }

  ngOnInit() {

    this.pozBio = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.http.get('/app/vratiJedan/'+this.id).subscribe((res) => {
      
      if(res['_body'] === ""){
        this.router.navigate(['/']);
      }else{
        this.pozBio = res.json();
      }
    });
  }

}
