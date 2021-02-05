import { MenuManagerService } from './../menu-manager.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuIcon: String;

  constructor(private menuManagerService: MenuManagerService) {
  }

  onMenuClicked() {
    this.menuManagerService.toggleMenu();
  }

  ngOnInit(): void {
    this.menuIcon = this.menuManagerService.getMenuIcon();
    this.menuManagerService.menuChanged.subscribe(() => {
      this.menuIcon = this.menuManagerService.getMenuIcon();
    });
  }

}
