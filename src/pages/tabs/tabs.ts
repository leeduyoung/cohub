import { Component } from '@angular/core';
import { ModalController, FabContainer } from 'ionic-angular';

import { HomePage } from '../home/home';
// import { ClubPage } from '../club/club';
import { RankPage } from '../rank/rank';
import { EventPage } from '../event/event';
// import { OptionPage } from '../option/option';
import { NotifyPage } from '../notify/notify';
import { ProfilePage } from '../profile/profile';
import { ModalContentPage } from '../upload-modal/upload-modal';

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RankPage;
  tab3Root = EventPage;
  tab4Root = NotifyPage;
  tab5Root = ProfilePage;

  constructor(public modalCtrl: ModalController) {

  }

  uploadModal(characterNum, fab: FabContainer) {
    fab.close();
    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }
}
