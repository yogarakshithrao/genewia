import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeroDetailComponent } from './app.hero-detail/app.hero-detail.component';
import { DashboardComponent } from './app.dashboard/app.dashboard.component';
import { HeroesComponent } from './app.hero-component/app.heroes.component';
import { HeroService } from './app.hero.service';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { MessagesComponent } from './app.messages/messages.component';
import { MessageService } from './app.messages/message.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
