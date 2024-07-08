import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ContentChild, Input, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { MatIcon, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Icon } from '@shared/interfaces/icon';
import { TableBaseData, TableColumn } from '@shared/interfaces/table';
import { BehaviorSubject } from 'rxjs';
import { BaseTableComponent } from '../base-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { PaginationComponent } from '../pagination/pagination.component';
// OVO sam ostavio ovako jer mozda ce trebati karticna tablica u buducnosti
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    PaginationComponent
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent<T extends TableBaseData> extends BaseTableComponent<T> implements OnChanges {

  @ContentChild(TemplateRef) expandableTemplate!: TemplateRef<unknown>;
  @ContentChild(TemplateRef) bulkActionTemplate!: TemplateRef<unknown>;
  @Input() isTableExpandable = false;
  @Input() isHeightFixed = false;
  @Input() isTableShadowDisplayed = false;
  @Input() displayedColumns: string[] = [];
  @Input() currentPage = 1;
  @Input() isBulkAction = false;
  @Input() isSimpleBulk = false;
  @Input() isLoading = false;
  @Input() isActionTable = false;
  public selection: SelectionModel<T> = new SelectionModel<T>(true, []);
  public singleSelection: SelectionModel<T> = new SelectionModel<T>(false, []);

  public readonly arrowDownIcon: Icon = { name: 'chevron-down', filePath: 'icons/chevron-down.svg' };
  public readonly arrowUpIcon: Icon = { name: 'chevron-up', filePath: 'icons/chevron-up.svg' };
  public readonly isSortOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	constructor(
    _changeDetectorRef: ChangeDetectorRef,
    _matIconRegistry: MatIconRegistry,
    _domSanitizer: DomSanitizer,
  ) {
		super(
      _changeDetectorRef,
      _matIconRegistry,
      _domSanitizer
    );

    this.registerIcon(this.arrowDownIcon!.name!, this.arrowDownIcon.filePath);
    this.registerIcon(this.arrowUpIcon!.name!, this.arrowUpIcon.filePath);
	}

  
  /**
   * Lifecycle hook that will get called whenever component's bound input is changed from parent
   * In case pagination event occurs or data sent to table changes refresh the selection of checkboxes
   * @param changes Changes that were send from Parent component
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (
      (changes['currentPage']?.currentValue &&
        changes['currentPage']?.previousValue !==
          changes['currentPage']?.currentValue) ||
      changes['dataSource']?.previousValue?.length
    ) {
      this.selection?.clear();
    }
  }
  /**
   * Method for checking if all checkboxes are selected (only for multiple selection)
   * @returns { boolean }
   */
  public isAllSelected(): boolean {
    return this.selection.selected.length === this.dataSource.length;
  }
  /**
   * Method for selecting/unselecting all row checkboxes
   * @returns { void }
   */
  public masterToggle(): void {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource);
  }
  /**
   * Check if highlighted classes should be applied to the view, it can be by the row being selected or expanded
   * @param row Generic row of datatable
   * @param tableColumns Table header class
   * @returns { boolean }
   */
  public isColumnExpandedOrSelected(
    row: T,
    tableColumns: TableColumn[]
  ): boolean {
    const triggerColumns = tableColumns.filter(
      (col: TableColumn) =>
        col.columnType === 'expandable' || col.key === 'selectable'
    );
    return triggerColumns.some(col => col.actionValue?.(row) ?? false);
  }
}
