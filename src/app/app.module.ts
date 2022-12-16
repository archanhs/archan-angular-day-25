import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { UserComponent } from './components/user/user.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { GaleryComponent } from './components/galery/galery.component';
import { BaseComponent } from './components/utils/base/base.component';
import { GaleryImageComponent } from './components/galery-image/galery-image.component';
import { FormsModule } from '@angular/forms';
import { PbbCountComponent } from './components/pbb-count/pbb-count.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoComponent } from './components/todo/todo.component';
import { MenuAppComponent } from './components/menu-app/menu-app.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    UserComponent,
    HeaderComponent,
    BannerComponent,
    GaleryComponent,
    BaseComponent,
    GaleryImageComponent,
    PbbCountComponent,
    TodoComponent,
    MenuAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
