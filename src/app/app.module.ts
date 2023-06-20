import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { TopNavigationComponent } from './shared/top-navigation/top-navigation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HomePageComponent } from './components/home-page/home-page.component';
import { ChartWrapperComponent } from './components/chart-wrapper/chart-wrapper.component';
import { ChartModule } from "primeng/chart";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/university-project-ni/assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    TopNavigationComponent,
    FooterComponent,
    HomePageComponent,
    ChartWrapperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
