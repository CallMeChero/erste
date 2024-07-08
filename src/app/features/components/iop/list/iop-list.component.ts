import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DomSanitizer } from '@angular/platform-browser';
import { Icon } from '@shared/interfaces/icon';
import { BehaviorSubject } from 'rxjs';
import { IOP_ACTION_FILTERS, IOP_FILTERS } from './iop-list.filters';
import { EFilterType, IFormFilter } from '@shared/interfaces/filter';
import { BaseListComponent } from '@shared/components/base-list.component';
import { IopTableRow, MOCK } from '@features/interfaces/iop';
import { TableComponent } from '@shared/components/table/table.component';
import { getIopListColumns } from './iop-list.table-columns';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ArchiveIssuingComponent } from '../dialog/archive-issuing/archive-issuing.component';

@Component({
  selector: 'app-iop-list',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    TableComponent,
    MatDialogModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  templateUrl: './iop-list.component.html',
  styleUrl: './iop-list.component.scss'
})
export class IopListComponent extends BaseListComponent<IopTableRow> implements OnInit {
  public readonly searchIcon: Icon = { name: 'magnifying_glass', filePath: 'icons/magnifying_glass.svg' }
  public readonly arrowDownIcon: Icon = { name: 'chevron-down', filePath: 'icons/chevron-down.svg' };
  public readonly arrowUpIcon: Icon = { name: 'chevron-up', filePath: 'icons/chevron-up.svg' };

  public readonly filterDropdown: IFormFilter[] = IOP_FILTERS;
  public readonly actionDropdown: string[] = IOP_ACTION_FILTERS;
  public readonly isActionSelectOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly isFilterSelectOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public dataList: IopTableRow[] = MOCK

  public iopForm!: FormGroup;
  public filterTypeEnum: typeof EFilterType = EFilterType; 
  private isDialogOpen = false;
  
  constructor(
    readonly _matIconRegistry: MatIconRegistry,
    readonly _domSanitizer: DomSanitizer,
    private readonly _formBuilder: FormBuilder,
    private readonly _dialog: MatDialog
  ) {
    super();
    this.registerIcon(this.searchIcon!.name!, this.searchIcon.filePath);

    this.iopForm = this.createGroup();
  }

  public createGroup(): FormGroup {
    return this._formBuilder.group({
      search: new FormControl(''),
      activeFilters: new FormControl(''),
      brojIop: new FormControl(''),
      brojUgovora: new FormControl(''),
      statusUgovora: new FormControl(''),
      k1: new FormControl(''),
      uvijeti: new FormControl(''),
    })
  }

  public ngOnInit(): void {
    this.tableColumns = getIopListColumns.bind(this)();
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

  /**
   * Receive Event from the child component and call method for pagination API
   * @param data Pagination Event Object
   */
  public handlePageChange(data: PageEvent): void {
    console.log(data)
    // const page: number = data.pageIndex + 1;
    // OPALI API
  }

  public onChangeAction(): void {
    if(!this.isDialogOpen) {
      // moramo ovako jer je onChange bez reaktivne forme daje 2x event van
      this.isDialogOpen = true;
      const dialogRef = this._dialog.open(ArchiveIssuingComponent, {
        height: '800px',
        width: '618px',
        data: {},
      });
  
      dialogRef.afterClosed().subscribe((result: boolean) => {
        console.log('The dialog was closed', result);
        this.isDialogOpen = false;
      });
    }
  }

  get activeFilters(): AbstractControl {
    return this.iopForm.controls['activeFilters'];
  }
}
