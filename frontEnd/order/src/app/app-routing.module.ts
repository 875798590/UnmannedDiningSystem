import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./component/not-found/not-found.component";


const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('../app/pages/pages.module')
      .then(m => m.PagesModule),
  },
  {path: '', redirectTo: 'pages', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];

const config: ExtraOptions = {
  enableTracing: true,
  useHash: false
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
