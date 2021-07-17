import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user/user.service';
import { RestApiService } from './services/rest-api/rest-api.service';
import { DefaultModule } from './layouts/default/default.module';
import { FullscreenModule } from './layouts/fullscreen/fullscreen.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    DefaultModule,
    FullscreenModule,
    ToastrModule.forRoot()
  ],
  providers: [
    UserService, 
    RestApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }