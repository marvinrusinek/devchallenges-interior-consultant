import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContainerComponent } from '../containers/container/container.component';
import { HeaderComponent } from '../containers/header/header.component';
import { MainComponent } from '../containers/main/main.component';
import { FooterComponent } from '../containers/footer/footer.component';


const routes: Routes = [
  { path: '', redirectTo: 'container' },
  { path: 'container', component: ContainerComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'main', component: MainComponent },
  { path: 'footer', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InteriorRoutingModule { }
