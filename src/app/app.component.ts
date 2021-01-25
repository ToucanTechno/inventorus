import { MenuManagerService } from './menu-manager.service';
import { Component } from '@angular/core';
import { Event, NavigationEnd, ResolveEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Inventorus';
  menuIcon: string;

  constructor(public menuManagerService: MenuManagerService,
              private router: Router) {
    this.menuIcon = this.menuManagerService.getMenuIcon();
    this.router.events.pipe(filter((e: Event): e is RouterEvent => e instanceof RouterEvent)).subscribe((e: RouterEvent) => {
      if (e instanceof NavigationEnd) {
        console.log(router);
        let ev = e as ResolveEnd 
        console.log(ev.id, ev.url);
        console.log(ev);
      }
    });
  }

  onClickMenu() {
    let isMenuOpened = this.menuManagerService.toggleMenu();
    this.menuIcon = this.menuManagerService.getMenuIcon();
  }

}
