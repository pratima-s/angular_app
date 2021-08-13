import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from 'src/user';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  url: string = "https://jsonplaceholder.typicode.com/todos"
  delurl: string = "https://jsonplaceholder.typicode.com/todos/user/"
  constructor(private http: HttpClient) { }
  addElement(proddata: any) {
    return this.http.post(this.url, proddata)
  }
  getuserData() {

    return this.http.get<Users[]>(this.url)
  }
  deletedata(id: string) {
    const tempUrl = this.delurl + id + ".json"
    debugger;
    return this.http.delete(tempUrl)
  }
}
