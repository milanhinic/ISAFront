import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dodaj-izmeni-segment',
  templateUrl: './dodaj-izmeni-segment.component.html',
  styleUrls: ['./dodaj-izmeni-segment.component.css']
})
export class DodajIzmeniSegmentComponent implements OnInit {

  // 0 => dodavanje, 1 => izmena
  @Input() mode: number;
  @Input() idSala:number;
  @Input() idSegment:number;

  private segmentForma: any;
  private segment:any;
  private naslov: string = '';

  constructor() { }

  ngOnInit() {

    console.log(this.mode + " " + this.idSala + " " +this.idSegment )

  }

}
