import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DangkyTTCNComponent } from './dangky-ttcn/dangky-ttcn.component';
import { DangkyKLTNComponent } from './dangky-kltn/dangky-kltn.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { QuanlydangkyTtcnComponent } from './quanlydangky-ttcn/quanlydangky-ttcn.component';
import { QuanlydangkyKltnComponent } from './quanlydangky-kltn/quanlydangky-kltn.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { ToastrModule } from 'ngx-toastr';
import {MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    DangkyKLTNComponent,
    DangkyTTCNComponent,
    LoginComponent,
    QuanlydangkyTtcnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    ToastrModule.forRoot(),
    MatPaginatorModule,
    QuanlydangkyKltnComponent,
    MatPaginator
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
