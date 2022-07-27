import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name = "amen"
  imageUrl = "assets/images/formalab.png"
  booksList = []
  usersList: any[] = [];
  myCondition = true

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      result => {
        this.usersList = result
      },
      error => {
        console.log(error)
      }
    )
  }
  hello(myname: string) {
    alert('hello ' + myname)
  }

}