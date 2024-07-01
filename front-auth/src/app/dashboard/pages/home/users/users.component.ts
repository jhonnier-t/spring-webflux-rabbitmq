import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardItemUserComponent } from '../../../components/card-item-user/card-item-user.component';

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
export default class UsersComponent { }
