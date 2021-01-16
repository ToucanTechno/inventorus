import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { StockComponent } from './stock/stock.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { TasksComponent } from './tasks/tasks.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'rooms', component: RoomsComponent },
    { path: 'stock', component: StockComponent },
    { path: 'wishlist', component: WishListComponent },
    { path: 'tasks', component: TasksComponent },
    { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }