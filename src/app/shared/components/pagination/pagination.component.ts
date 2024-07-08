import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PaginationComponent implements OnChanges{
  @Input() length = 0;
  @Input() size = 0;
  @Input() pageIndex = 0;
  @Output() changePageEvent: EventEmitter<PageEvent> =
    new EventEmitter<PageEvent>();
  public pageSizeOptions$: BehaviorSubject<number[]> = new BehaviorSubject<
    number[]
  >([5, 10, 25, 50]);
  /**
   * Lifecycle hook that will get called whenever component's bound input is changed from parent
   * Check the number of total entities and display page size options from it
   * @param changes Changes that were send from Parent component
   */
  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['totalEntities']?.currentValue <= 5) {
      this.pageSizeOptions$.next([5]);
    } else if (changes['totalEntities']?.currentValue <= 10) {
      this.pageSizeOptions$.next([5, 10]);
    } else if (changes['totalEntities']?.currentValue <= 25) {
      this.pageSizeOptions$.next([5, 10, 25]);
    } else {
      this.pageSizeOptions$.next([5, 10, 25, 50]);
    }
  }
}
