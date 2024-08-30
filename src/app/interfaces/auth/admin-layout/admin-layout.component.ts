import { Component } from '@angular/core';
import { TopbarComponent } from '../topbar/topbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [TopbarComponent, SidebarComponent, RouterModule],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

}
