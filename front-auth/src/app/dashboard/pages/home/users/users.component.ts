import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardItemUserComponent } from '../../../components/card-item-user/card-item-user.component';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../interfaces/user';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule, CardItemUserComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsersComponent { 

  users: User[] = [];
  
  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.listUsers().subscribe((response: any)=>{
      this.users = response[0].data;
    });
    
  }

}
