import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RouterModule, Routes, Router} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { AddItemComponent } from './add-item/add-item.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { HomeComponent } from './home/home.component';
import { MycartComponent } from './mycart/mycart.component';
import { MyordersComponent } from './myorders/myorders.component';
import { FeedbackComponent } from './feedback/feedback.component';


const appRoutes: Routes = [
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {path: 'login', component: LoginpageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'addItem', component: AddItemComponent},
  {path: 'home', component: HomeComponent},
  {path: 'mycart', component: MycartComponent},
  {path: 'myorders', component: MyordersComponent},
  {path: 'feedback', component: FeedbackComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    RegisterComponent,
    HeaderComponent,
    AddItemComponent,
    DeleteItemComponent,
    UpdateItemComponent,
    HomeComponent,
    MycartComponent,
    MyordersComponent,
    FeedbackComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
