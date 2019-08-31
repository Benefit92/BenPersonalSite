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
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PageNotFoundComponent,
    BlogComponent,
    AboutComponent,
    ContactComponent,
    ToastsComponent
  ], imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [ HttpClient ]
      }
    }),
    AppRoutingModule,
    NgbModule,
    environment.production ? HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 100}) : [] ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
