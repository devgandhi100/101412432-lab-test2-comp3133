import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common'; // ✅ Added Location
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SpacexService } from '../spacex.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  missionId!: number;
  mission!: Mission;

  constructor(
    private route: ActivatedRoute,
    private spacexService: SpacexService,
    private location: Location // ✅ Injected Location
  ) {}

  ngOnInit(): void {
    this.missionId = Number(this.route.snapshot.paramMap.get('id'));
    this.getMissionDetails();
  }

  getMissionDetails(): void {
    this.spacexService.getMissionById(this.missionId).subscribe((data) => {
      this.mission = data;
    });
  }

  // ✅ Back navigation method
  goBack(): void {
    this.location.back();
  }
}
