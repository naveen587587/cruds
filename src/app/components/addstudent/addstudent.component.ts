import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {




  public studentForm:FormGroup = new FormGroup (
    {
      name: new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
     gender: new FormControl(), 
     mobile: new FormControl(null,[Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
      email: new FormControl(null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      batch: new FormControl(null,[Validators.required]),
      address: new FormControl(
    {
      city: new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(15)]), 
      mandal: new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      district: new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(15)]), 
      state: new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      pincode: new FormControl(null,[Validators.required, Validators.min(100000), Validators.maxLength(100000)]),
    }
      ),
      education: new FormControl([
       
      {
        qualification:new FormControl(null,[Validators.required]),
      year: new FormControl(null,[Validators.required]), 
      percentage: new FormControl(null,[Validators.required])
    }
  ]),
      
      company:new FormControl( { 
        name: new FormControl(null,[Validators.required]),
      location: new FormControl(null,[Validators.required]),
      package: new FormControl(null,[Validators.required]),
      offerDate: new FormControl(null,[Validators.required]),
      }
      ),
      sourceType: new FormControl(null,[Validators.required]),
       sourceFrom: new FormControl(null,[Validators.required]),
        referralName: new FormControl(null,[Validators.required]),
      
      
    }

  )
  
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    this.studentForm.markAllAsTouched();
  }

}
