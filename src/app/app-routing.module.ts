import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { GraphicDesignComponent } from './graphic-design/graphic-design.component';
import { HomeComponent } from './home/home.component';
import { MobileAppDevelopmentComponent } from './mobile-app-development/mobile-app-development.component';
import { SeoComponent } from './seo/seo.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServicesComponent } from './services/services.component';
import { WebDesignDevelopmentComponent } from './web-design-development/web-design-development.component';
import { WebHostingComponent } from './web-hosting/web-hosting.component';

const routes: Routes = [
  { path:'' ,redirectTo:'/home',pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:ServicesComponent},
  {path:'contact',component:ContactComponent},
  {path:'digital-marketing',component:DigitalMarketingComponent},
  {path:'mobile-app-development',component:MobileAppDevelopmentComponent},
  {path:'web-hosting',component:WebHostingComponent},
  {path:'web-design-development',component:WebDesignDevelopmentComponent},
  {path:'seo',component:SeoComponent},
  {path:'graphic-design',component:GraphicDesignComponent},
  {path:'service-detail',component:ServiceDetailComponent},
  {path: '**', redirectTo: '/home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
