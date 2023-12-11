import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm = this.fb.group({

    fullname: ['',[Validators.required, Validators.pattern(/^[a-zA-z]+(?:[a-zA-z]+)*$/)]],
    email: ['',[Validators.required, Validators.email]],
    password: ['',Validators.required],
    confirmPassword: ['',Validators.required]
    
  // }, {
  //   Validators: passwordMatchValidator
  })
  constructor(private fb: FormBuilder){ }


  get fullname(){

    return this.registerForm.controls['fullname'];
  }
  get email(){

    return this.registerForm.controls['email'];
  }

   get password (){

    return this.registerForm.controls['password'];

   }

   get confirmPassword(){


    return this.registerForm.controls['confirmPassword'];

   }

   submitDetails(){

   const postData = { ...this.registerForm.value } ;
   delete postData.confirmPassword;

   }
}
