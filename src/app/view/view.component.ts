import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private l4:LibraryService) {this.viewbook(); }
  bookdetails!:any;
  
  ngOnInit(): void {
  }
   viewbook()
   {
    this.l4.viewbooks().subscribe(
      (resp) => { this.bookdetails=resp; }
      );
   }
}
