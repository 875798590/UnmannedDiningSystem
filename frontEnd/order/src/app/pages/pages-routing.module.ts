import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {NotFoundComponent} from "../component/not-found/not-found.component";
import {HelloWorldComponent} from "./hello-world/hello-world.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'hello',
      component: HelloWorldComponent
      // loadChildren: () => import('./hello-world/hello-world.component')
      //   .then(m => m.HelloWorldComponent)
    },
    {
      path: '',
      redirectTo: 'hello',
      pathMatch: 'full',
    },
    {
      path: '**',
      // loadChildren: () => import('../component/not-found/not-found.component')
      //   .then(m => m.NotFoundComponent)
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
