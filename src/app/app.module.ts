import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// dedicated to communicating with http
import { HttpClientModule } from "@angular/common/http";
// good for adding routes to app
import { RouterModule, Routes, Route} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { RoundPipe } from './round.pipe';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'test', component: FirstComponentComponent},
  // adding variable into the rout path
  {path: 'test/:exampleParam', component: FirstComponentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    MyDirectiveDirective,
    RoundPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // apply routes here
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
