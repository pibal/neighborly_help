import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { PaginationList } from '../../../shared/shared';

@Injectable({
  providedIn: 'root',
})
export class OfferHelpService {
  constructor() {}

  getOfferData() {
    return of(this.data);
  }

  mockedRowData = [
    { id: 123, make: 'Toyota', model: 'Celica', price: 35000 },
    { id: 123, make: 'Ford', model: 'Mondeo', price: 32000 },
    { id: 123, make: 'Porsche', model: 'Boxter', price: 72000 },
    { id: 123, make: 'Toyota', model: 'Celica', price: 35000 },
    { id: 123, make: 'Ford', model: 'Mondeo', price: 32000 },
    { id: 123, make: 'Porsche', model: 'Boxter', price: 72000 },
    { id: 123, make: 'Toyota', model: 'Celica', price: 35000 },
    { id: 123, make: 'Ford', model: 'Mondeo', price: 32000 },
    { id: 123, make: 'Porsche', model: 'Boxter', price: 72000 },
    { id: 123, make: 'Toyota', model: 'Celica', price: 35000 },
    { id: 123, make: 'Ford', model: 'Mondeo', price: 32000 },
    { id: 123, make: 'Porsche', model: 'Boxter', price: 72000 },
    { id: 123, make: 'Toyota', model: 'Celica', price: 35000 },
    { id: 123, make: 'Ford', model: 'Mondeo', price: 32000 },
    { id: 123, make: 'Porsche', model: 'Boxter', price: 72000 },
    { id: 123, make: 'Toyota', model: 'Celica', price: 35000 },
    { id: 123, make: 'Ford', model: 'Mondeo', price: 32000 },
    { id: 123, make: 'Porsche', model: 'Boxter', price: 72000 },
    { id: 123, make: 'Toyota', model: 'Celica', price: 35000 },
    { id: 123, make: 'Ford', model: 'Mondeo', price: 32000 },
    { id: 123, make: 'Porsche', model: 'Boxter', price: 72000 },
    { id: 123, make: 'Toyota', model: 'Celica', price: 35000 },
    { id: 123, make: 'Ford', model: 'Mondeo', price: 32000 },
    { id: 123, make: 'Porsche', model: 'Boxter', price: 72000 },
    { id: 123, make: 'Toyota', model: 'Celica', price: 35000 },
    { id: 123, make: 'Ford', model: 'Mondeo', price: 32000 },
    { id: 123, make: 'Porsche', model: 'Boxter', price: 72000 },
    { id: 123, make: 'Toyota', model: 'Celica', price: 35000 },
    { id: 123, make: 'Ford', model: 'Mondeo', price: 32000 },
    { id: 123, make: 'Porsche', model: 'Boxter', price: 72000 },
    { id: 123, make: 'Toyota', model: 'Celica', price: 35000 },
    { id: 123, make: 'Ford', model: 'Mondeo', price: 32000 },
    { id: 123, make: 'Porsche', model: 'Boxter', price: 72000 },
  ];

  data: PaginationList = {
    data: this.mockedRowData,
    totalElements: this.mockedRowData.length,
  };
}
