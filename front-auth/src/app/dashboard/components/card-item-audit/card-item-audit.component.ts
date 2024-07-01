import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuditService } from '../../../services/audit.service';
import { Audit } from '../../../interfaces/audit';

@Component({
  selector: 'app-card-item-audit',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './card-item-audit.component.html',
  styleUrl: './card-item-audit.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardItemAuditComponent { 

  audits: Audit[] = [];
  
  constructor(private auditService: AuditService){}

  ngOnInit(): void {
    this.auditService.listAudit().subscribe((response: any)=>{
      this.audits = response[0].data;
    });
    
  }

}
