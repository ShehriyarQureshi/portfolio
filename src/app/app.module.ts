import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { GreeterComponent } from './components/greeter/greeter.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    GreeterComponent,
    IntroductionComponent,
    ProjectsComponent,
    SkillsComponent,
    SkillCardComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AboutComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
