import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { QLDKComponent } from './QuanLyDangKy/qldk.component';
import { DangkyTTCNComponent } from './dangky-ttcn/dangky-ttcn.component';
import { DangkyKLTNComponent } from './dangky-kltn/dangky-kltn.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { TaiKhoanComponent } from './tai-khoan/tai-khoan.component';
import { QuanlydangkyTtcnComponent } from './quanlydangky-ttcn/quanlydangky-ttcn.component';
import { QuanlydangkyKltnComponent } from './quanlydangky-kltn/quanlydangky-kltn.component';


@NgModule({
  declarations: [
    AppComponent,
    DangKyComponent,
    QLDKComponent,
    DangkyTTCNComponent,
    DangkyKLTNComponent,
    TrangchuComponent,
    TaiKhoanComponent,
    QuanlydangkyTtcnComponent,
    QuanlydangkyKltnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
