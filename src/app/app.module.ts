import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { Ex1Component } from './ex1/ex1.component';
import { Ex1Parent1Component } from './ex1/ex1-parent1/ex1-parent1.component';
import { Ex1Child1Component } from './ex1/ex1-child1/ex1-child1.component';

import { Ex2Component } from './ex2/ex2.component';
import { Ex2Parent1Component } from './ex2/ex2-parent1/ex2-parent1.component';
import { Ex2Child1Component } from './ex2/ex2-child1/ex2-child1.component';

import { Ex3Component } from './ex3/ex3.component';
import { Ex3Child1Component } from './ex3/ex3-child1/ex3-child1.component';
import { Ex3Parent1Component } from './ex3/ex3-parent1/ex3-parent1.component';

import { Ex4Component } from './ex4/ex4.component';
import { Ex4Parent1Component } from './ex4/ex4-parent1/ex4-parent1.component';
import { Ex4Parent2Component } from './ex4/ex4-parent2/ex4-parent2.component';
import { Ex4Parent3Component } from './ex4/ex4-parent3/ex4-parent3.component';
import { Ex4Child1Component } from './ex4/ex4-child1/ex4-child1.component';
import { Ex4Child2Component } from './ex4/ex4-child2/ex4-child2.component';
import { Ex4Stranger1Component } from './ex4/ex4-stranger1/ex4-stranger1.component';
import { Ex4SharedDataService } from './ex4/ex4-shared-data-service/ex4-shared-data.service';

const appRoutes: Routes = [
  { path: '', component: HelloComponent },
  { path: 'ex1', component: Ex1Component },
  { path: 'ex2', component: Ex2Component },
  { path: 'ex3', component: Ex3Component },
  { path: 'ex4', component: Ex4Component }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [Ex4SharedDataService],
  declarations: [
    AppComponent,
    HelloComponent,
    Ex1Component,
    Ex1Parent1Component,
    Ex1Child1Component,
    Ex2Component,
    Ex2Parent1Component,
    Ex2Child1Component,
    Ex3Component,
    Ex3Child1Component,
    Ex3Parent1Component,
    Ex4Component,
    Ex4Child1Component,
    Ex4Child2Component,
    Ex4Parent1Component,
    Ex4Parent2Component,
    Ex4Stranger1Component,
    Ex4Parent3Component],
  bootstrap: [AppComponent]
})
export class AppModule { }
