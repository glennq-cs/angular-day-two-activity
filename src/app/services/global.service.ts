import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  appTitle = 'Title from Service';
  appSubtitle = 'Subtitle from Service';

  constructor() { }

  toUpperCase(text: any): any {
    return text.toUpperCase();
  }
}
