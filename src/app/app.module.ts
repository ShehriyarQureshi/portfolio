import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesWorkedComponent } from './components/companies-worked/companies-worked.component';
import { ContactComponent } from './components/contact/contact.component';
import { GreeterComponent } from './components/greeter/greeter.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GreeterComponent,
    TechnologiesComponent,
    CompaniesWorkedComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
