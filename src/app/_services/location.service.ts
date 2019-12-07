import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Location } from '../_models/location';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  apiUrl = environment.baseUrl + 'mobile/';

constructor(private http: HttpClient) { }

  getDiscoveredLocations(userId: number): Observable<Location[]> {
    return this.http.get<Location[]>(this.apiUrl + userId + '/getDiscoveredLocations');
  }

  getUndiscoveredLocations(userId: number): Observable<Location[]> {
    return this.http.get<Location[]>(this.apiUrl + userId + '/getUndiscoveredLocations');
  }
}
