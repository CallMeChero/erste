import { Component } from '@angular/core';
import { SortDirection, TableColumn } from '@shared/interfaces/table';
@Component({ template: '' })
export abstract class BaseListComponent<T> {
  // public availabilityFilter = [];
  public list: T[] = [];
  public entityCollection: T[] = [];
  // public menuItems: ActionMenuItem[] = [];
  public tableColumns: TableColumn[] = [];
  public currentSortOrder: SortDirection = SortDirection.DESCENDING;
  /**
   * Method for mapping table columns keys for material table
   * @returns array of column header strings for material table
   */
  protected mapTableColumnKeys(): string[] {
    return this.tableColumns.map((x: TableColumn) => x.key);
  }
}