import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MenuManagerService {
    isMenuOpened: boolean;
    isMenuActive: boolean;
    menuChanged: EventEmitter<void>;

    constructor() {
        this.isMenuActive = false;
        this.isMenuOpened = false;
        this.menuChanged = new EventEmitter<void>();
        /* TODO: debug */
        console.log("MenuManager Service constructor finished");
    }

    toggleMenu() {
        if (this.isMenuActive) {
            this.isMenuOpened = !this.isMenuOpened;
            this.menuChanged.emit();

            /* TODO: debug */
            if (this.isMenuOpened) {
                console.log("Menu is opened")
            } else {
                console.log("Menu is closed")
            }
            return this.isMenuOpened;
        }
    }

    getMenuIcon() {
        if (this.isMenuActive && this.isMenuOpened) {
            return "menu_open";
        } else {
            return "menu";
        }
    }

    activateMenu() {
        this.isMenuActive = true;
        this.isMenuOpened = true;
        this.menuChanged.emit();
    }

    deactivateMenu() {
        this.isMenuActive = false;
        this.isMenuOpened = false;
        this.menuChanged.emit();
    }
}