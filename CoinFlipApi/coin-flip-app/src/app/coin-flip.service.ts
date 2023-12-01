import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoinFlipService {

  private apiUrl = 'http://localhost:5000/coinflip'; // Adjust the URL as per your backend configuration

  constructor(private http: HttpClient) { }

  flipCoin() {
    return this.http.get(this.apiUrl + '/flip');
  }

  getResults() {
    return this.http.get(this.apiUrl + '/results');
  }
}
