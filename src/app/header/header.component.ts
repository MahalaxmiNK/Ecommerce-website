import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private dashBoardServices : DashboardService
  ) { }

  ngOnInit() {
    
  }

}
