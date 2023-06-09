import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { GridComponent } from './components/grid/grid.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { CareerComponent } from './components/career/career.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'grid', component: GridComponent },
  { path: 'main-menu', component: MainMenuComponent },
  { path: 'career', component: CareerComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: '**', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
