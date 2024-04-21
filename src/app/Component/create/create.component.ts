import { CommonModule } from '@angular/common';
import { ServiceService } from './../../Services/service.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet,FormsModule,CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  carCreated: boolean = false;
  car:any={};
  constructor(private ServiceService: ServiceService,public routes: Router){}



  onSubmit(data: any) {
    console.log(data);
    this.ServiceService.createCar(data).subscribe(() =>{
      console.log("car is created successfully",data);
      this.ServiceService.getCars()
      this.carCreated = true;
      this.routes.navigate(['/show']);
    })

  }

}
