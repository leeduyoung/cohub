import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-rank',
  templateUrl: 'rank.html'
})
export class RankPage {
  rank: string = "keyword";

  items = [
    'NodeJs',
    'Javascript',
    'Angular',
    'React',
    'Ionic',
    'Spring',
    'Java',
    'Go',
    'Python',
    'C#',
    'HTML5',
    'CSS',
  ];

  items2 = [
    'www.naver.com',
    'www.daum.net',
    'www.google.com',
    'www.facebook.com',
    'www.yahoo.com',
    'ithub.tistory.com',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];  

  constructor(public navCtrl: NavController) {
    console.log('rank page constructor');
  }

  ngOnInit() {
    console.log('rank ngOnInit started');
  }

  ionViewDidLoad() {
    console.log('rank ionic view did load');
  }

  itemSelected(item: string, index: number) {
    console.log("Selected Item", item);
    console.log("Selected index", index);
  }

}
