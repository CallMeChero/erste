import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DELIVERY_WAYS, ISSUE_REASONS, WHO_GOT_IOP } from '../../list/iop-list.filters';
import { ISimpleFilter } from '@shared/interfaces/filter';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Icon } from '@shared/interfaces/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-archive-issuing',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './archive-issuing.component.html',
  styleUrl: './archive-issuing.component.scss'
})
export class ArchiveIssuingComponent {

  public archiveForm: FormGroup = this.createForm();
  public issueReasons: ISimpleFilter[] = ISSUE_REASONS;
  public deliveryWays: ISimpleFilter[] = DELIVERY_WAYS;
  public whoGotIOPs: ISimpleFilter[] = WHO_GOT_IOP;
  public isIssueReasonsOpen = false;
  public isDeliveryOpen = false;
  public isGotIOPOpen = false;
  public readonly arrowDownIcon: Icon = { name: 'chevron-down', filePath: 'icons/chevron-down.svg' };
  public readonly arrowUpIcon: Icon = { name: 'chevron-up', filePath: 'icons/chevron-up.svg' };

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _dialogRef: MatDialogRef<ArchiveIssuingComponent>,
    private readonly _matIconRegistry: MatIconRegistry,
    private readonly _domSanitizer: DomSanitizer,
  ) {
    this.registerIcon(this.arrowDownIcon!.name!, this.arrowDownIcon.filePath);
    this.registerIcon(this.arrowUpIcon!.name!, this.arrowUpIcon.filePath);
  }

  public createForm(): FormGroup {
    return this._formBuilder.group({
      isInArchive: new FormControl(false),
      description: new FormControl(''),
      issueReason: new FormControl(null),
      datumIzdavanja: new FormControl(new Date()),
      deliveryWay: new FormControl(null),
      whoGotIOP: new FormControl(null)
    })
  }

  public onCancel(): void {
    this._dialogRef.close();
  }

  public onSubmit(): void {
    console.log(this.archiveForm)
  }

  /**
   * Method used to register custom icons
   * @param navItem ISideMenuItem
  */
  registerIcon(iconName: string, filePath: string): void {
    this._matIconRegistry.addSvgIcon(
        iconName,
        this._domSanitizer.bypassSecurityTrustResourceUrl(filePath)
      )
  }
}
