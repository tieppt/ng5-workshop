import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MformModule } from './mform/mform.module';
import { SearchProfileService } from './search-profile.service';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    MformModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{
    provide: SearchProfileService,
    useClass: SearchProfileService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
