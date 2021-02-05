import { MatSidenavContainer } from '@angular/material/sidenav';
import { MenuManagerService } from './../menu-manager.service';
import { AfterViewChecked, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  @ViewChild('sidenav') sidenav: MatSidenavContainer;
  isMenuOpen: boolean;

  constructor(public menuManagerService: MenuManagerService) {
  }

  ngOnInit(): void {
    this.menuManagerService.activateMenu();
    this.isMenuOpen = this.menuManagerService.isMenuOpened;
    this.menuManagerService.menuChanged.subscribe(() => {
      this.isMenuOpen = this.menuManagerService.isMenuOpened;
    });
  }

  ngOnDestroy(): void {
    this.menuManagerService.deactivateMenu();
  }
}
