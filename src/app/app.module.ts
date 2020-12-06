import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContainerComponent } from './interior/containers/container/container.component';
import { HeaderComponent } from './interior/containers/header/header.component';
import { MainComponent } from './interior/containers/main/main.component';
import { FooterComponent } from './interior/containers/footer/footer.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'interior',
    pathMatch: 'full'
  },
  {
    path: 'interior',
    loadChildren: () =>
      import('./interior/routing/interior-routing.module').then(m => m.InteriorRoutingModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
