import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Event,
  NavigationEnd,
  Router,
} from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  ActiveSideMenu,
  AddSideMenu,
} from '../store/actions/side-menu.action';
import { ISideMenu } from '../store/models/side-menu.model';
import { SideMenuState } from '../store/state/side-menu.state';

// todo: check: https://www.ngxs.io/plugins/router
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent implements OnInit, OnDestroy {
  items: Observable<ISideMenu[]>;
  subscription: Subscription;

  constructor(private store: Store, private router: Router) {
    this.items = this.store.select(SideMenuState.getSideMenu);

    const items = environment.config.sideMenu;

    this.store.dispatch(new AddSideMenu(items));

    this.subscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.store.dispatch(new ActiveSideMenu(event.url));
      }
    });
  }

  ngOnInit(): void {
    //this.store.dispatch(new GetSideMenu());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
