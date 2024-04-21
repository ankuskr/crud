import { routes } from './../../app.routes';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from './../../Services/service.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss',
})
export class UpdateComponent implements OnInit {
  id: any;
  submitSuccess: boolean = false;
  routes: any;
  updateValue: any;
  updateForm!: FormGroup;

  constructor(
    private updateServices: ServiceService,
    private _route: Router,
    private _activeroute: ActivatedRoute,
    private _formBuilder: FormBuilder
  ) {
    const id = this._activeroute.params.subscribe((id: any) => {
      // console.log("id is ",id);
      this.id = id.id;
    });
  }

  ngOnInit() {
    // Initialization logic
    this.getCars();
    this.updateForm = this._formBuilder.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }

  getCars() {
    this.updateServices.getCars().subscribe((resp: any) => {
      console.log('resp', resp);
      // console.log(resp._id, this.id, 'resp._id==this.id');
      resp.forEach((itam: any) => {
        if (itam._id == this.id) {
          console.log('Update value is ', itam);
          this.updateValue = itam;
          this.updateForm.controls['name'].setValue(itam.Name);
          this.updateForm.controls['brand'].setValue(itam.Brand);
          this.updateForm.controls['quantity'].setValue(itam.Quantity);
          // this.updateForm.patchValue(itam);
          console.log(this.updateValue, '000000000000000000000');
        }
      });
      // this.cars = resp;
    });
  }

  updated: boolean = false;

  // onUpdate() {
  //   // this.routes.navigate(['/update']);
  //   console.log(this.updateForm.value); ///new value
  //   console.log(this.updateValue); ////id pahle se hai 

  //   this.updateServices.getCars()
  //     this.updated = true;
  //     this._route.navigate(['/show']);
  //   //new ovject bana le 
  // }




  onUpdate() {
    const updatedData = this.updateForm.value;
    this.updateServices.updateCar(this.id, updatedData).subscribe(
      (response: any) => {
        console.log('Update successful:', response);
        this.updated = true;
        this._route.navigate(['/show']);
      },
      (error: any) => {
        console.error('Update failed:', error);
        // Handle error here
      }
    );
  }
  



}
