import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { BlogProvider } from '../../providers/blog/blog';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';

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
  posts: any[];
  select: string = "info";
  map: GoogleMap;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private blogProvider: BlogProvider,
    private googleMaps: GoogleMaps,
    public platForm: Platform,
  ) {
    platForm.ready().then(() =>
       { 
         this.loadMap(); 
        }
    );
  }

  /*ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.loadMap();
  }*/

  ngOnInit() {
    this.blogProvider.getUser(this.navParams.get('id')).subscribe (
      (user) => { this.user = user; console.log(user.name);});
    
    //get posts
    this.blogProvider.getPosts(this.navParams.get('id')).subscribe (
      (posts) => { this.posts = posts;});  
  }

  loadMap() {
    console.log('load map');
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

    let element: HTMLElement = document.getElementById('map_canvas');

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    console.log(this.map);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        // Now you can use all methods safely.
        this.map.addMarker({
            title: 'Ionic',
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: 43.0741904,
              lng: -89.3809802
            }
          })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('clicked');
              });
          })          
      })
      .catch(err =>{
        console.log(err.message);
      });
  }
}
