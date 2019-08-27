import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { HomeComponent } from './pages/home/components/home/home.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { BlogComponent } from './pages/blog/components/blog/blog.component';
import { AboutComponent } from './pages/about/components/about/about.component';
import { ContactComponent } from './pages/contact/components/contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastsComponent } from './shared/components/toasts/toasts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/services/InMemoryDbService';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PageNotFoundComponent,
    BlogComponent,
    AboutComponent, ContactComponent, ToastsComponent
  ],
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    AppRoutingModule, NgbModule, environment.production ? HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 100}) : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
