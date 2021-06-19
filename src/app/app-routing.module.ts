import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoPageComponent } from './components/contato-page/contato-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InstituicoesPageComponent } from './components/instituicoes-page/instituicoes-page.component';
import { LeisPageComponent } from './components/leis-page/leis-page.component';
import { MenuTemplateComponent } from './components/menu-template/menu-template.component';

const routes: Routes = [{
  path:'',
  component: MenuTemplateComponent,
  children: [
    {
    path: '',
    component: HomePageComponent
    },
    {
      path: 'leis',
      component: LeisPageComponent
    },
    {
      path: 'instituicoes',
      component: InstituicoesPageComponent
    },
    {
      path: 'contato',
      component : ContatoPageComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
