import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  updatedCar: any;
  ngOnInit() {
    this.getCars();
  }

  constructor(private http: HttpClient) {}
  // Method to fetch all cars
  getCars() {
    return this.http.get('http://localhost:3000/api/v1/getAll');
  }

  // Method to delete a car by ID
  deleteCar(id: string) {
    return this.http.delete(`http://localhost:3000/api/v1/delete/${id}`);
  }

  // Method to create a new car
  createCar(data: any) {
    return this.http.post('http://localhost:3000/api/v1/post', data);
  }

  // Method to fetch a single car by ID
  getSingleCar(id: any) {
    return this.http.get(`http://localhost:3000/api/v1/getOne/${id}`);
  }

  // Method to update a car by ID
  updateCar(id: any, updatedData: any) {
    return this.http.put(
      `http://localhost:3000/api/v1/update/${id}`,
      updatedData
    );
  }
}
