import { Icon } from "@shared/interfaces/icon";

export interface ISideMenuItem extends Icon{
    urlPath: string;
    isActive: boolean;
}