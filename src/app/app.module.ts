import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { FooterComponent } from './component/footer/footer.component';
import { MainComponent } from './component/main/main.component';
import { HeroBannerComponent } from './component/hero-banner/hero-banner.component';
import { QuickLinksComponent } from './component/quick-links/quick-links.component';
import { ButtonComponent } from './shared/component/button/button.component';
import { DetailCardComponent } from './shared/component/detail-card/detail-card.component';
import { AlertCardComponent } from './shared/component/alert-card/alert-card.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DbService } from './shared/services/db.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    ButtonComponent,
    FooterComponent,
    MainComponent,
    HeroBannerComponent,
    QuickLinksComponent,
    DetailCardComponent,
    AlertCardComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
