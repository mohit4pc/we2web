import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { MobileAppDevelopmentComponent } from './mobile-app-development/mobile-app-development.component';
import { WebHostingComponent } from './web-hosting/web-hosting.component';
import { WebDesignDevelopmentComponent } from './web-design-development/web-design-development.component';
import { SeoComponent } from './seo/seo.component';
import { GraphicDesignComponent } from './graphic-design/graphic-design.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    ServiceDetailComponent,
    DigitalMarketingComponent,
    MobileAppDevelopmentComponent,
    WebHostingComponent,
    WebDesignDevelopmentComponent,
    SeoComponent,
    GraphicDesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
