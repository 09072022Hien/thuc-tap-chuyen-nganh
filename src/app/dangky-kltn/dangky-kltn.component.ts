// dangky-kltn.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'; // Import ToastrService

@Component({
  selector: 'app-dangky-kltn',
  templateUrl: './dangky-kltn.component.html',
  styleUrls: ['./dangky-kltn.component.css']
})
export class DangkyKLTNComponent {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.profileForm = this.fb.group({
      studentId: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9- ]+$/)]],
      major: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      this.toastr.success('Đăng ký khóa luận tốt nghiệp thành công!', 'Thông báo');
      this.profileForm.reset(); // Reset form sau khi submit thành công
    } else {
      console.log('Form is invalid');
      this.toastr.error('Vui lòng điền đầy đủ thông tin vào các trường bắt buộc.', 'Lỗi');
    }
  }
}
