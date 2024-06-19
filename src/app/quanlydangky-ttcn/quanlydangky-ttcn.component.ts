import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-quanlydangky-ttcn',
  templateUrl: './quanlydangky-ttcn.component.html',
  styleUrls: ['./quanlydangky-ttcn.component.css']
})
export class QuanlydangkyTtcnComponent implements OnInit {
  profileForm: FormGroup;
  displayedColumns: string[] = ['studentId', 'fullName', 'email', 'phone', 'major'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.profileForm = this.fb.group({
      studentId: ['', Validators.required],
      fullName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      email: ['', [Validators.required, Validators.email]],
      major: ['', Validators.required]
    });

    this.dataSource.paginator = this.paginator;
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const newStudent: PeriodicElement = {
        studentId: this.profileForm.value.studentId,
        fullName: this.profileForm.value.fullName,
        email: this.profileForm.value.email,
        phone: this.profileForm.value.phone,
        major: this.profileForm.value.major
      };

      this.dataSource.data = [...this.dataSource.data, newStudent];
      this.profileForm.reset();
    }
  }
}

export interface PeriodicElement {
  studentId: number;
  fullName: string;
  email: string;
  phone: string;
  major: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {studentId: 6682434, fullName: 'Trần Thu Thảo', email: 'Thaotran2k3@gmail.com', phone: '032345679', major:'Công Nghệ Phần Mềm'},
  {studentId: 652738, fullName: 'Vũ Ngọc Huy', email: 'Huyvu2k2@gmail.com', phone: '032345978', major:'Công Nghệ Thông Tin'},
  {studentId: 656836, fullName: 'Đào Quốc Hùng', email: 'Quochung03122k2@gmail.com', phone: '032349678', major:'Công Nghệ Phần Mềm'},
  {studentId: 658753, fullName: 'Trần Duy Khánh', email: 'trankhanh@gmail.com', phone: '032345698', major:'Công Nghệ Thông Tin'}, 
  {studentId: 6642434, fullName: 'Trần Thị Như Quỳnh', email: 'Quynhtran2k3@gmail.com', phone: '032345679', major:'Công Nghệ Phần Mềm'},
  {studentId: 652533, fullName: 'Nguyễn Thế Danh', email: 'danhnguyen1052k2@gmail.com', phone: '0384702474', major: 'Công Nghệ Phần Mềm'},
];
