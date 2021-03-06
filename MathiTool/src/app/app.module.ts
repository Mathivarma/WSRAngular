import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatIconModule, MatSidenavModule, MatToolbarModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home.component';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

// import { HttpModule } from '@angular/http'
import { HttpClientModule  } from  '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NextPageComponent } from '../NextPage/NextPage.component';
const routes: Routes = [
  {
    path:'Home',
    component:HomeComponent},
    {
      path: 'GOT',
      component: NextPageComponent
   
    },
    {
      path: '',
     redirectTo:'/Home',
     pathMatch:'full'
    }]

@NgModule({
  declarations: [
    AppComponent,HomeComponent,NextPageComponent
  ],
  imports: [
    RouterModule.forRoot(routes),BrowserModule,HttpClientModule,FormsModule,BrowserAnimationsModule,MatInputModule,MatFormFieldModule,
    NoopAnimationsModule,MatButtonModule, MatCheckboxModule,MatIconModule,MatListModule, MatSidenavModule, MatToolbarModule
  ],
  exports: [MatButtonModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



