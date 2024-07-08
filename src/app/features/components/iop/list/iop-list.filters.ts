import { EFilterType, IFormFilter } from "@shared/interfaces/filter";

export const IOP_FILTERS: IFormFilter[] = [
    {
        label: 'Broj IOP-a',
        formControlName: 'brojIop',
        type: EFilterType.INPUT,
        placeholder: 'Unesi broj IOP-a'
    },
    {
        label: 'Broj ugovora',
        formControlName: 'brojUgovora',
        type: EFilterType.INPUT,
        placeholder: 'Unesi broj ugovora'
    },
    {
        label: 'Status ugovora',
        formControlName: 'statusUgovora',
        type: EFilterType.SELECT,
        isOpened: false,
        placeholder: 'Odaberi status ugovora',
        items: [ 'S1', 'S2']
    },
    {
        label: 'K1',
        formControlName: 'k1',
        type: EFilterType.SELECT,
        isOpened: false,
        placeholder: 'Odaberi K1',
        items: [ 'K1', 'K2']
    },
    {
        label: 'Uvijeti za povrat ispunjeni',
        formControlName: 'uvijeti',
        type: EFilterType.SELECT,
        isOpened: false,
        placeholder: 'Odaberi uvijet',
        items: [
            'Da', 'Ne'
        ]
    }
];

export const IOP_ACTION_FILTERS: string[] = [
    'Izdavanje iz arhive',
    'Kreiraj zadatak',
    'Poništi'
]