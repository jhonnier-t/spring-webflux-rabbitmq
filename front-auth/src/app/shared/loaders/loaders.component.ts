import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-loaders',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './loaders.component.html',
  styleUrl: './loaders.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadersComponent { }
