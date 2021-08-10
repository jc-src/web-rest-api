import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { ISideMenu, SideMenu } from '../models/side-menu.model';
import { ActiveSideMenu, AddSideMenu, ClearSideMenu, GetSideMenu } from '../actions/side-menu.action';
import { environment } from 'src/environments/environment';

export class SideMenuStateModel {
  items: ISideMenu[] = [];
}

@State<SideMenuStateModel>({
  name: 'sideMenu',
  defaults: {
    items: []
  },
})
@Injectable()
export class SideMenuState {

  @Selector()
  static getSideMenu(state: SideMenuStateModel) {
    return state.items.map((obj) =>
      Object.assign(new SideMenu(), obj)
    );
  }

  @Action(AddSideMenu)
  addSideMenuItems(
    { getState, patchState }: StateContext<SideMenuStateModel>,
    { payload }: AddSideMenu
  ) {
    const state = getState();
    patchState({
      items: payload,
    });
  }

  @Action(ClearSideMenu)
  clearAllSideMenuItems(
    { getState, patchState }: StateContext<SideMenuStateModel>
  ) {
    const state = getState();
    patchState({
      items: [],
    });
  }

  @Action(ActiveSideMenu)
  setActiveSideMenuItem(
    { getState, patchState }: StateContext<SideMenuStateModel>,
    { payload }: ActiveSideMenu
  ) {
    const state = getState();
    const items = state.items.map((item: ISideMenu) => {
      item.active = payload == item.id ? true : false;
      return item;
    });
    patchState({
      items: items
    });
  }
}
