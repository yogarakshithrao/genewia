import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './app.dashboard/app.dashboard.component';
import { HeroDetailComponent } from './app.hero-detail/app.hero-detail.component';
import { HeroesComponent } from './app.hero-component/app.heroes.component';
import { HeroService } from './app.hero.service';
import { MessageService } from './app.messages/message.service';
import { MessagesComponent } from './app.messages/messages.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  providers: [ HeroService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
