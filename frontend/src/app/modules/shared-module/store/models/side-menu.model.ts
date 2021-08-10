export interface ISideMenu {
    id: string;
    name: string;
    link: string;
    active: boolean;
}

export class SideMenu implements ISideMenu {
    id: string = '';
    name: string = '';
    link: string = '';
    active: boolean = false;
}
