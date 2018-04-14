import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OglasiService } from '../../services/oglasi.service'


@Component({
  selector: 'app-fan-zona',
  templateUrl: './fan-zona.component.html',
  styleUrls: ['./fan-zona.component.css']
})
export class FanZonaComponent implements OnInit {

  tudjiOglasi : any;
  mojiOglasi : any;



  constructor(private oglasiService : OglasiService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(
    



  ) {
  }

}
