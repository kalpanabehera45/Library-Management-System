import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private l3:LibraryService) { }

  ngOnInit(): void {
  }
deletedata(deleteform: any)
{
  this.l3.deleterecord(deleteform.value).subscribe();
}

}
