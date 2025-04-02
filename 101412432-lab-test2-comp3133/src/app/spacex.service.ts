import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mission } from './models/mission';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  private baseUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getAllMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.baseUrl);
  }

  getMissionById(id: number): Observable<Mission> {
    return this.http.get<Mission>(`${this.baseUrl}/${id}`);
  }

  getMissionsByYear(year: string): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.baseUrl}?launch_year=${year}`);
  }

  // ✅ NEW method to support dynamic filter query
  getFilteredMissions(url: string): Observable<Mission[]> {
    return this.http.get<Mission[]>(url);
  }
}
