import { ISideMenu } from "../models/side-menu.model";

export class AddSideMenu {
    static readonly type = '[SideMenu] Add List';

    constructor(public payload: ISideMenu[]) {}
}

export class ActiveSideMenu {
    static readonly type = '[SideMenu] SetActive';

    constructor(public payload: string) {}
}

export class GetSideMenu {
    static readonly type = '[SideMenu] Get All';
}

export class ClearSideMenu {
    static readonly type = '[SideMenu] Clear All';
}