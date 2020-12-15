import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Angular';
  subtitle = 'Angular subtitle';
  themeColor = 'bg-dark';

  constructor(private _globalService: GlobalService) { }

  ngOnInit(): void {
    this.title =  this._globalService.toUpperCase(this._globalService.appTitle);
    this.subtitle = this._globalService.appSubtitle;

    this._globalService.subjectName.subscribe(
      (name: any) => {
        this.title = name || this._globalService.toUpperCase(this._globalService.appTitle);
      }
    )

  }

}
