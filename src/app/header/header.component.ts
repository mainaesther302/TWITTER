import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DetailsService } from '../Services/details.service'; 
import { UserDetails } from '../Models';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] 
})
export class HeaderComponent implements OnInit {
  form!: FormGroup;
  userData: any;

  constructor(private fb: FormBuilder, private detailsService: DetailsService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''] 
    });
  }

  onSubmit(): void {
    const selectedNameId = this.form.value.name;
    this.detailsService.getUserData(selectedNameId).subscribe(data => {
      this.userData = data;
      console.log('User Data:', this.userData);

      // Example of posting data
      const postData = { };
      this.detailsService.postUserData(selectedNameId, postData).subscribe(response => {
        console.log('Post Response:', response);
      });
    });
  }
}
