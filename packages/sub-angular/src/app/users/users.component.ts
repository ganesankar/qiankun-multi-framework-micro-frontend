import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { IUser } from '../interfaces/user';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  providers: [UsersService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users!: IUser[];

  constructor(private usersService: UsersService) { }
  ngOnInit(): void {
    this.usersService.getUsers$().subscribe(users => {
      this.users = users;
    })
  }

}
