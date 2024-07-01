import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardItemUserComponent } from '../../../components/card-item-user/card-item-user.component';
import { CardItemAuditComponent } from '../../../components/card-item-audit/card-item-audit.component';

@Component({
  selector: 'app-audit',
  standalone: true,
  imports: [
    CommonModule, CardItemAuditComponent
  ],
  templateUrl: './audit.component.html',
  styleUrl: './audit.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AuditComponent {



 }
