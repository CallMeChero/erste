import { getTableColumns, TableColumn } from "@shared/interfaces/table";
import { IopListComponent } from "./iop-list.component";

export function getIopListColumns(
  this: IopListComponent
): TableColumn[] {
  return getTableColumns([
    {
        title: '',
        sortable: false,
        key: 'selectable',
        cellClass: 'width-50',
        columnType: 'checkbox',
    },
    {
        title: 'Broj IOP-a',
        sortable: true,
        key: 'brojIOP',
        cellClass: 'width-250',
    },
    {
        title: 'Vrsta IOP-a',
        sortable: true,
        key: 'vrstaIOP',
        cellClass: 'width-250',
    },
    {
        title: 'Status IOP-a',
        sortable: true,
        key: 'statusIOP',
        cellClass: 'width-250',
    },
    {
        title: 'Uvijeti za povratom ispunjeni',
        sortable: true,
        key: 'uvijeti',
        cellClass: 'width-250',
    },
    {
        title: 'Broj ugovora',
        sortable: true,
        key: 'ugovor',
        cellClass: 'width-250',
    },
    {
        title: 'Status ugovora',
        sortable: true,
        key: 'statusU',
        cellClass: 'width-250',
    },
    {
        title: 'Naziv izdavatelja',
        sortable: true,
        key: 'naziv',
        cellClass: 'width-250',
    },
    {
        title: 'Šfira izdavatelja',
        sortable: true,
        key: 'vrsta',
        cellClass: 'width-250',
    },
  ]);
}