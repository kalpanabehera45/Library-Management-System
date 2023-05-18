import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  constructor(private l1 : LibraryService) { }

  ngOnInit(): void {
  }
  insertdata(insertform: { value: any; })
  {
    return  this.l1.insertform1(insertform.value).subscribe();
  }

}
