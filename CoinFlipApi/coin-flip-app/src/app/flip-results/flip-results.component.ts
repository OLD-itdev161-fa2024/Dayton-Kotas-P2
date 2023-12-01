import { Component, OnInit } from '@angular/core';
import { CoinFlipService } from '../coin-flip.service';

@Component({
  selector: 'app-flip-results',
  templateUrl: './flip-results.component.html',
  styleUrls: ['./flip-results.component.css']
})
export class FlipResultsComponent implements OnInit {
  results: any[] = [];

  constructor(private coinFlipService: CoinFlipService) {}

  ngOnInit() {
    this.coinFlipService.getResults().subscribe((data: any[]) => {
      this.results = data;
    });
  }
}

