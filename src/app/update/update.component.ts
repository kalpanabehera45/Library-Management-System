import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private l2:LibraryService) { }

  ngOnInit(): void {
  }
updatedata(updateform: { value: any; })
{
    this.l2.updaterecord(updateform.value).subscribe();
}
}
