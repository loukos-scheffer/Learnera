import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { UserService } from './services/user/user.service';
import { RestApiService } from './services/rest-api/rest-api.service';
import { ELearningComponent } from './e-learning/e-learning.component';
import { CommunityComponent } from './community/community.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavigationBarComponent,
    ELearningComponent,
    CommunityComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService, 
    RestApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
