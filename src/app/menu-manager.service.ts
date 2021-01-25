import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MenuManagerService {
    isMenuOpened: boolean;
    menuOpened: EventEmitter<boolean>;
    isMenuActive: boolean;
    shouldSubscribe: boolean;

    constructor() {
        this.isMenuOpened = true;
        this.menuOpened = new EventEmitter<boolean>();
        this.isMenuActive = false;
    }

    toggleMenu() {
        if (this.isMenuActive) {
            this.isMenuOpened = !this.isMenuOpened;
            this.menuOpened.emit(this.isMenuOpened);
            return this.isMenuOpened;
        } else {
            return false;
        }
    }

    getMenuIcon() {
        if (this.isMenuActive && this.isMenuOpened) {
            return "menu_open";
        } else {
            return "menu";
        }
    }
}