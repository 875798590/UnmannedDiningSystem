import {NgModule} from '@angular/core';
import {NbCardModule, NbMenuModule} from '@nebular/theme';

import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from "./pages-routing.module";
import {HelloWorldComponent} from "./hello-world/hello-world.component";
import {NotFoundComponent} from "../component/not-found/not-found.component";

@NgModule({
  imports: [
    PagesRoutingModule,
    NbMenuModule,
    NbCardModule,
  ],
  declarations: [
    PagesComponent,
    HelloWorldComponent,
    NotFoundComponent
  ],
})
export class PagesModule {
}
