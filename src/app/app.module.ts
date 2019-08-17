import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule, MatTabsModule } from '@angular/material';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { GreeterComponent } from './components/greeter/greeter.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    GreeterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatTabsModule,
    AnimateOnScrollModule.forRoot()
  ],
  providers: [AboutComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
