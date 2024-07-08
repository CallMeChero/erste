export interface IFormFilter {
    label: string;
    formControlName: string;
    items?: string[];
    type: EFilterType;
    isOpened?: boolean;
    placeholder: string;
}

export enum EFilterType {
    INPUT = 'input',
    RADIO = 'radio',
    CHECKBOX = 'checkbox',
    SELECT = 'select'
}

export interface ISimpleFilter {
    name: string;
    value: string;
}