import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { MissionfilterComponent } from '../missionfilter/missionfilter.component';
import { SpacexService } from '../spacex.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MissionfilterComponent
  ],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];

  constructor(private spacexService: SpacexService, private router: Router) {}

  ngOnInit(): void {
    this.spacexService.getAllMissions().subscribe(data => {
      this.missions = data;
    });
  }

  goToDetails(flight_number: number): void {
    this.router.navigate(['/details', flight_number]);
  }

  onFilterChanged(filters: any): void {
    const baseUrl = 'https://api.spacexdata.com/v3/launches?';
    const params: string[] = [];

    if (filters.year) {
      params.push(`launch_year=${filters.year}`);
    }
    if (filters.launch_success !== '') {
      params.push(`launch_success=${filters.launch_success}`);
    }
    if (filters.land_success !== '') {
      params.push(`land_success=${filters.land_success}`);
    }

    const queryUrl = baseUrl + params.join('&');

    this.spacexService.getFilteredMissions(queryUrl).subscribe(data => {
      this.missions = data;
    });
  }
}
