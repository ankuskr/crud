import { Router } from '@angular/router';
import { ServiceService } from './../../Services/service.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  
  i!: number;
  cars: any;

  ngOnInit() {
    this.getCars();
  }

  constructor(private ServiceService: ServiceService, public routes: Router) {}
  carCreated: boolean = false;
  car: any = {};

  getCars() {
    this.ServiceService.getCars().subscribe((resp: any) => {
      console.log('resp', resp);
      this.cars = resp;
    });
  }

  deleteBtn(car: any) {
    // console.log("delete",car);
    this.ServiceService.deleteCar(car._id).subscribe((resp) => {
      console.log('resp', resp);
      this.getCars();
    });
  }



  updateData(car: any) {
    console.log(car);

    this.routes.navigateByUrl(`update/${car._id}`) /// in this line we can use to navigate the update page
    // this.routes.navigate(['/update', car._id]);
     // Navigate to UpdateComponent with car ID
  }
}
