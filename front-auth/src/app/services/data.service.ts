import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data = signal<any>({});

  setData(data: any) {
    this.data.set(data);
  }

  getData() {
    return this.data();
  }
}