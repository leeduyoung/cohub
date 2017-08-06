import { Component } from '@angular/core';

import { HomePage } from '../home/home';
// import { ClubPage } from '../club/club';
import { RankPage } from '../rank/rank';
import { EventPage } from '../event/event';
// import { OptionPage } from '../option/option';
import { NotifyPage } from '../notify/notify';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'top-tabs.html'
})
export class TopTabsPage {

  tab1Root = HomePage;
  tab2Root = RankPage;
  tab3Root = EventPage;
  tab4Root = NotifyPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
