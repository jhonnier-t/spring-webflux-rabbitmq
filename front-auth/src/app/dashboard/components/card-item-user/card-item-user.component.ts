import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ResponseModelDto, User } from '../../../interfaces/user';

@Component({
  selector: 'app-card-item-user',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './card-item-user.component.html',
  styleUrl: './card-item-user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardItemUserComponent { 

  users: User[] = [];
  
  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.listUsers().subscribe((response: any)=>{
      this.users = response[0].data;
    });
    
  }

}
