import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BlogProvider } from '../../providers/blog/blog';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icon: string;
  items: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private blogProvider: BlogProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    /*this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];*/
    this.icon = 'boat';

    this.items = [];
    /*for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }*/
    this.blogProvider.getUsers().subscribe(
      (items) => this.items = items
      );
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
