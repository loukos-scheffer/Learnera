import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user/user.service';
import { RestApiService } from './services/rest-api/rest-api.service';
import { DefaultModule } from './layouts/default/default.module';
import { FullscreenModule } from './layouts/fullscreen/fullscreen.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    DefaultModule,
    FullscreenModule
  ],
  providers: [
    UserService, 
    RestApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
