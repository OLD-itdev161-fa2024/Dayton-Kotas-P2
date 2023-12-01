import { Component, OnInit } from '@angular/core';
import { CoinFlipService } from '../coin-flip.service'; // Import the CoinFlipService

@Component({
  selector: 'app-coin-flip',
  templateUrl: './coin-flip.component.html',
  styleUrls: ['./coin-flip.component.css']
})
export class CoinFlipComponent implements OnInit {

  constructor(private coinFlipService: CoinFlipService) {} // Inject the CoinFlipService

  ngOnInit(): void {
  }

  flipCoin() {
    // Call the flipCoin method from CoinFlipService
    this.coinFlipService.flipCoin().subscribe(result => {
      console.log(result); // Handle the result as needed, e.g., display it in the UI
    });
  }
}

