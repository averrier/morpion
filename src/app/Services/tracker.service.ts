import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  constructor(private http: HttpClient) { }

  positionUrl = 'http://192.168.0.51:8080/qpe/getTagPosition?version=2&tag=a4da22e16cb0';

  public getTrackerPosition() {
    return this.http.get(this.positionUrl);
  }
}
