import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NbLayoutModule, NbMenuModule, NbThemeModule} from '@nebular/theme';
import {HttpClientModule} from "@angular/common/http";
import {PagesModule} from "./pages/pages.module";
import {NbAuthModule, NbPasswordAuthStrategy} from "@nebular/auth";
import {NbEvaIconsModule} from "@nebular/eva-icons";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    PagesModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email'
        }),
      ]
    }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbMenuModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
