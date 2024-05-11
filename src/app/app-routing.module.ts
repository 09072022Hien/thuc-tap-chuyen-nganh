import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DangkyTTCNComponent} from "./dangky-ttcn/dangky-ttcn.component";
import {DangkyKLTNComponent} from "./dangky-kltn/dangky-kltn.component";
import {TrangchuComponent} from "./trangchu/trangchu.component";
import {TaiKhoanComponent} from "./tai-khoan/tai-khoan.component";
import {QuanlydangkyKltnComponent} from "./quanlydangky-kltn/quanlydangky-kltn.component";
import {QuanlydangkyTtcnComponent} from "./quanlydangky-ttcn/quanlydangky-ttcn.component";

const routes: Routes = [
  { path: 'trangchu', component: TrangchuComponent },
  { path: 'DangKy/dangky-ttcn', component: DangkyTTCNComponent },
  { path: 'DangKy/DangKy-kltn', component: DangkyKLTNComponent },
  { path: 'QLDangKy/Dangky-ttcn', component: QuanlydangkyTtcnComponent },
  { path: 'QLDangKy/Dangky-kltn', component: QuanlydangkyKltnComponent },
  { path: 'taikhoan', component: TaiKhoanComponent },
  { path: 'trangchu', component: TrangchuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
