import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { GreeterComponent } from './components/greeter/greeter.component';
import { InteractiveMapComponent } from './components/interactive-map/interactive-map.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { MapComponent } from './components/map/map.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { RecommendationCardComponent } from './components/recommendation-card/recommendation-card.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HomeComponent } from './home/home.component';
import { CompaniesWorkedComponent } from './components/companies-worked/companies-worked.component';



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
    ProjectCardComponent,
    RecommendationsComponent,
    RecommendationCardComponent,
    InteractiveMapComponent,
    MapComponent,
    CompaniesWorkedComponent
  ],
  imports: [
    BrowserModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    HttpClientModule,
    MatButtonModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AboutComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
