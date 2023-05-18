import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InsertComponent } from './insert/insert.component';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http:HttpClient) { }
   url = "http://localhost:9001/insert";

   url1 = "http://localhost:9001/update";

   url2 = "http://localhost:9001/delete";

   url3 = "http://localhost:9001/view";

  public insertform1(bookdata: any)
  {
    return this.http.post(this.url,bookdata);
  }
  
  public updaterecord(bookupdate: any)
  {
     return this.http.post(this.url1,bookupdate);
  }

  public deleterecord(bdelete: any)
  {
    return this.http.post(this.url2,bdelete);
 }
  
  public viewbooks()
  {
    return this.http.get(this.url3);
  }

}
