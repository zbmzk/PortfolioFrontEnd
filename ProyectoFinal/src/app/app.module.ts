import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoCursoComponent } from './components/logo-curso/logo-curso.component';
import { LogoSocialMediaComponent } from './components/logo-social-media/logo-social-media.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HsskillsComponent } from './components/hsskills/hsskills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoCursoComponent,
    LogoSocialMediaComponent,
    BannerComponent,
    AboutComponent,
    ExperienciaComponent,
    EducacionComponent,
    HsskillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
