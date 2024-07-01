import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardItemUserComponent } from '../../../components/card-item-user/card-item-user.component';
import { CardItemAuditComponent } from '../../../components/card-item-audit/card-item-audit.component';
import { Audit } from '../../../../interfaces/audit';
import { AuditService } from '../../../../services/audit.service';

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

  audits: Audit[] = [];
  
  constructor(private auditService: AuditService){}

  ngOnInit(): void {
    this.auditService.listAudit().subscribe((response: any)=>{
      this.audits = response[0].data;
    });
    
  }

 }
