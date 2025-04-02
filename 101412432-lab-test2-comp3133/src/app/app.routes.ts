import { Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';

export const appRoutes: Routes = [
  { path: '', component: MissionlistComponent },
  { path: 'details/:id', component: MissiondetailsComponent },
  { path: '**', redirectTo: '' }
];
