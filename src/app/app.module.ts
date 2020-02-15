import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesWorkedComponent } from './components/companies-worked/companies-worked.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { GreeterComponent } from './components/greeter/greeter.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { HomeComponent } from './home/home.component';
import { HireMeComponent } from './components/hire-me/hire-me.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    GreeterComponent,
    IntroductionComponent,
    CompaniesWorkedComponent,
    FooterComponent,
    HireMeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AboutComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
