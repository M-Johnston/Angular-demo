import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RouteInfoComponent} from './route-info/route-info.component';
import {ExampleAComponent} from './example-a/example-a.component';
import {ExampleBComponent} from './example-b/example-b.component';
import {ExampleCComponent} from './example-c/example-c.component';
import {ExampleValueComponent} from './example-value/example-value.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {title: 'Home'},
    children: [{
      path: 'ExampleA',
      component: ExampleAComponent,
      data: {title: 'Route Info'},
    },
      {
        path: 'ExampleB',
        component: ExampleBComponent,
        data: {title: 'Route Info'},
      },
      {
        path: 'ExampleC',
        component: ExampleCComponent,
        data: {title: 'Route Info'},
      },
      {
        path: ':value',
        component: ExampleValueComponent,
        data: {title: 'Route Info'}
      }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
