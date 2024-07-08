/* eslint-disable @typescript-eslint/no-explicit-any */
import { TemplateRef } from '@angular/core';

export class TableColumn {
    title = '';
    key = '';
    columnType: 'switch' | 'button' | 'expandable' | 'text' | 'tooltip' | 'date' | 'dynamic-text' | 'template' |'checkbox' = 'text';
    class?: string;
    cellClass?: string;
    dataClass: (data: any) => string = () => '';
    toolTipClass?: string;
    iconLabel?: string;
    dateFormat = 'MM.dd.yyyy - HH:mm';
    icon?: any;
    valueGetterFn?: (data: any) => string;
    template!: TemplateRef<any>;
    sortFn?: (a: any, b: any) => 0 | 1;
    sortable?: boolean;
    sortDirection: SortDirection | null = null;
    disabledFn?: (data: any) => any;
    actionValue?: (data: any) => any;
    actionCallback?: (...data: any) => void;
    constructor(column: Partial<TableColumn>) {
      Object.assign(this, {
        ...column,
      });
    }
}

export const getTableColumns = (
    columns: Partial<TableColumn>[]
): TableColumn[] => {
    return columns.map(
        (partialColumn: Partial<TableColumn>) => new TableColumn(partialColumn)
    );
};
export interface TableBaseData {
id: string | number;
}

export interface TableBaseData {
	id: string | number;
}

export enum SortDirection {
	ASCENDING = 'ASC',
	DESCENDING = 'DESC',
}

export interface Page {
	number: number; // Current page Number
	size?: number; // Size of items per page
	last?: number; // Last Page Number
}
