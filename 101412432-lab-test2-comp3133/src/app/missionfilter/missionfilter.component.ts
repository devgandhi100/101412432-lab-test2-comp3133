import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Add this
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // ✅ Add here
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  @Output() filterChanged = new EventEmitter<any>();

  years: string[] = [];
  filters = {
    year: '',
    launch_success: '',
    land_success: ''
  };

  constructor() {
    const currentYear = new Date().getFullYear();
    for (let y = 2006; y <= currentYear; y++) {
      this.years.push(y.toString());
    }
  }

  emitFilter() {
    this.filterChanged.emit({ ...this.filters });
  }

  clearFilters() {
    this.filters = {
      year: '',
      launch_success: '',
      land_success: ''
    };
    this.emitFilter();
  }
}
