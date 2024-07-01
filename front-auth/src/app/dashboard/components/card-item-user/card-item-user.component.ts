import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../../../interfaces/user';

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

  @Input () users: User[] = []; 
  
}
