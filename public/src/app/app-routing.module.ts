import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SurveyComponent } from './survey/survey.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: MainComponent },
  { path: 'poll/:id', component: SurveyComponent },
  { path: 'create', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
