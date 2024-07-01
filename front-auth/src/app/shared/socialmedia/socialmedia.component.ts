import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-socialmedia',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './socialmedia.component.html',
  styleUrl: './socialmedia.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialmediaComponent { }
