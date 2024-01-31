import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainChatComponent } from './components/chat/main-chat.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    MainChatComponent 
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
