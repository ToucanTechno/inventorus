import { MatSidenavContainer } from '@angular/material/sidenav';
import { MenuManagerService } from './../menu-manager.service';
import { Component, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenavContainer;
  constructor(public menuManagerService: MenuManagerService) {
    this.menuManagerService.menuOpened.subscribe((isOpened: boolean) => {
      if (isOpened) {
        this.sidenav.open();
      } else {
        this.sidenav.close();
      }
    });
  }

  ngOnInit(): void {
  }
}
