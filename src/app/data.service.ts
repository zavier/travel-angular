import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private defaultCity = localStorage.city || '北京';
  private messageSource = new BehaviorSubject<String>(this.defaultCity);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    localStorage.city = message;
    this.messageSource.next(message);
  }
}
