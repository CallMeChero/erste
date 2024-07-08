import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { SortDirection, TableBaseData, TableColumn } from '@shared/interfaces/table';
import { BaseLayoutComponent } from './base-layout.component';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';

@Component({
	selector: 'app-base-table',
	template: '',
    standalone: true
})
export abstract class BaseTableComponent<T extends TableBaseData> extends BaseLayoutComponent {
    @Input() hasPagination = false;
    @Input() dataSource: T[] = [];
    @Input() columns: TableColumn[] = [];
    @Input() pageLength = 20;
    @Input() pageSize = 5;
    @Output() pageChanged: EventEmitter<PageEvent> =
        new EventEmitter<PageEvent>();
    @Output() sortDirectionChange: EventEmitter<Sort> = new EventEmitter<Sort>();
    // @Output() rowClicked: EventEmitter<any> = new EventEmitter<any>();
    public sortDirections: typeof SortDirection = SortDirection;

    protected constructor(
        protected changeDetectorRef: ChangeDetectorRef,
        _matIconRegistry: MatIconRegistry,
        _domSanitizer: DomSanitizer,
    ) {
        super(
            _matIconRegistry,
            _domSanitizer
        )
    }
    /**
     * Method for sorting data
     * @param idx corresponds to certain table header
     * @returns { void } but emits event for handling sorting of data
     */
    public sortData(sortValue: Sort): void {
        this.sortDirectionChange.emit(sortValue);
        this.changeDetectorRef.detectChanges();
    }
    /**
     * A function optionally passed into the NgForOf directive to customize how NgForOf uniquely identifies items in an iterable
     * @param _ index of the element inside of ngForOf
     * @param row generic row in table
     * @returns returns primary key
     */
    public trackBy(_: number, row: T): string {
        return row.id as string;
    }
    /**
     * Method for emitting page change event
     * @param event
     */
    public onPageChanged(event: PageEvent): void {
        console.log('Emitted event from child: ', event);
        this.pageChanged.emit(event);
    }

    //   public onRowClicked(event: any): void {
    //     this.rowClicked.emit(event);
    //   }
}
