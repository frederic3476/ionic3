import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BlogProvider } from '../../providers/blog/blog';

/**
 * Generated class for the DetailUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-user',
  templateUrl: 'detail-user.html',
})
export class DetailUserPage implements OnInit {

  user: any;
  select: string = "info";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private blogProvider: BlogProvider
  ) {
  }

  ngOnInit() {
    this.blogProvider.getUser(this.navParams.get('id')).subscribe (
      (user) => { this.user = user; console.log(user.name);});
  }

}
