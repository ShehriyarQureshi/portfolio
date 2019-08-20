import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule, MatTabsModule, MatIconModule, MatButtonModule } from '@angular/material';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { GreeterComponent } from './components/greeter/greeter.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { HttpClientModule } from '@angular/common/http';


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
    SkillCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [AboutComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
