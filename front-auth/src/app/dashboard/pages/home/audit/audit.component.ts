import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardItemUserComponent } from '../../../components/card-item-user/card-item-user.component';
import { CardItemAuditComponent } from '../../../components/card-item-audit/card-item-audit.component';
import { Audit } from '../../../../interfaces/audit';
import { AuditService } from '../../../../services/audit.service';
import { User } from '../../../../interfaces/user';

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


  public audits = signal<Audit[]>([]);
  
  constructor(private auditService: AuditService){}

  ngOnInit(): void {
    this.auditService.listAudit().subscribe((response: any)=>{
      this.audits.set(response[0].data);
    });
    
  }

 }
