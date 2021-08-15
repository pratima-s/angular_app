import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service'
import { FormControl, FormGroup } from '@angular/forms';
import { map, filter } from 'rxjs/operators';
import { Users } from 'src/user';

@Component({
  selector: 'app-alltask',
  templateUrl: './alltask.component.html',
  styleUrls: ['./alltask.component.css'],
  providers: [ApiserviceService]
})
export class AlltaskComponent implements OnInit {
  ngForm: FormGroup = new FormGroup({})
  userData!: Users[];
  issubmit = false;

  constructor(private callservice: ApiserviceService) { }

  ngOnInit(): void {
    this.getData()
    this.ngForm = new FormGroup(
      {

        'userId': new FormControl(),
        'id': new FormControl(),
        'title': new FormControl(),
        'completed': new FormControl()

      }
    )
  }
  getData() {
    this.callservice.getuserData().pipe(map(
      (resdata) => {

        for (const key in resdata) {
          resdata = resdata.filter(x => x.userId == "1")

        }

        return resdata
      }
    )).subscribe(
      (resdata) => {
        console.log(resdata)
        this.userData = resdata
      }
    )
  }

  ondelete(index: any) {
    if (confirm("Are you sure you want to delete the data")) {
      this.userData.splice(this.userData.indexOf(index), 1)
      alert("data deleted successfully")
    }
    else {
      alert("error in deleting data")
    }

  }

  getcolor(completed: any) {
    switch (completed) {
      case true:
        return 'green';
        break;
      case false:
        return 'yellow';
        break;
      default:
        return 'blue';
        break;
    }
  }
  

  addElements() {
    console.log(this.ngForm.value)
    this.userData.push(this.ngForm.value)
    this.callservice.addElement(this.ngForm.value).subscribe(
      (resdata) => {
        console.log(resdata)
        alert("Data saved succesfully")
      }
    )
  }

}