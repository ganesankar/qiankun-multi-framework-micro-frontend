import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UsersService } from '../../users.service';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  id!: string | null;
  user!: IUser;

  constructor(private usersService: UsersService, private router: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    this.usersService.getUserById$(this.id!).subscribe(user => {
      this.user = user;

    })
  }

}
