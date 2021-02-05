import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatRippleModule } from '@angular/material/core'
import { MatSidenavModule } from '@angular/material/sidenav'

import { RoomsComponent } from './rooms/rooms.component';
import { TasksComponent } from './tasks/tasks.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { StockComponent } from './stock/stock.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    TasksComponent,
    ItemsListComponent,
    StockComponent,
    WishListComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatRippleModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
