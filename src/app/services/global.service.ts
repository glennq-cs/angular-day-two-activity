import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  appTitle = 'Title from Service';
  appSubtitle = 'Subtitle from Service';
  themeColor = 'bg-dark';

  subjectName = new Subject();

  constructor() { }

  toUpperCase(text: any): any {
    return text.toUpperCase();
  }
}
