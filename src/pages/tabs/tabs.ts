import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ClubPage } from '../club/club';
import { EventPage } from '../event/event';
import { OptionPage } from '../option/option';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ClubPage;
  tab3Root = EventPage;
  tab4Root = OptionPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
