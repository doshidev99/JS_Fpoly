import { Component } from '@angular/core';

import { Inventor, IProduct } from './entities/type'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  title = 'w-angularjs';
  student = {
    name: 'doshi',
    gender: 'MALE',
    birthday: '01/01/0000',
    image: 'demo.png',
    point: 9
  };

  inventors: Inventor[] = [{
    "id": 1,
    "first": "Jermain",
    "last": "Simkovitz",
    "year": 1991,
    "passed": 2009
  }, {
    "id": 2,
    "first": "Vick",
    "last": "Coldbreath",
    "year": 2006,
    "passed": 2007
  }, {
    "id": 3,
    "first": "Scotti",
    "last": "Lochrie",
    "year": 1987,
    "passed": 2007
  }, {
    "id": 4,
    "first": "Beatriz",
    "last": "Lymbourne",
    "year": 2012,
    "passed": 1994
  }, {
    "id": 5,
    "first": "Bernadina",
    "last": "Alonso",
    "year": 2000,
    "passed": 1999
  }, {
    "id": 6,
    "first": "Evelina",
    "last": "Dederich",
    "year": 2001,
    "passed": 2011
  }, {
    "id": 7,
    "first": "Moise",
    "last": "Leap",
    "year": 2001,
    "passed": 2010
  }];

  products: IProduct[] = [{
    "productId": 1,
    "productName": "Damaris",
    "productCode": "Silverthorne",
    "releaseDate": "8/12/2020",
    "price": 96,
    "description": "n/a",
    "starRating": 1,
    "imageUrl": "http://dummyimage.com/196x100.png/dddddd/000000"
  }, {
    "productId": 2,
    "productName": "Frannie",
    "productCode": "Honywill",
    "releaseDate": "6/2/2020",
    "price": 81,
    "description": "n/a",
    "starRating": 2,
    "imageUrl": "http://dummyimage.com/216x100.png/ff4444/ffffff"
  }, {
    "productId": 3,
    "productName": "Carlin",
    "productCode": "Lambeth",
    "releaseDate": "7/23/2020",
    "price": 83,
    "description": "Major Pharmaceuticals",
    "starRating": 3,
    "imageUrl": "http://dummyimage.com/247x100.png/dddddd/000000"
  }, {
    "productId": 4,
    "productName": "Mag",
    "productCode": "Spurden",
    "releaseDate": "2/6/2021",
    "price": 66,
    "description": "Biotechnology: Biological Products (No Diagnostic Substances)",
    "starRating": 4,
    "imageUrl": "http://dummyimage.com/209x100.png/ff4444/ffffff"
  }, {
    "productId": 5,
    "productName": "Kalil",
    "productCode": "Hemmingway",
    "releaseDate": "12/6/2020",
    "price": 7,
    "description": "Industrial Machinery/Components",
    "starRating": 5,
    "imageUrl": "http://dummyimage.com/187x100.png/cc0000/ffffff"
  }, {
    "productId": 6,
    "productName": "Emmaline",
    "productCode": "Hawkins",
    "releaseDate": "3/26/2021",
    "price": 68,
    "description": "n/a",
    "starRating": 6,
    "imageUrl": "http://dummyimage.com/194x100.png/ff4444/ffffff"
  }, {
    "productId": 7,
    "productName": "Gualterio",
    "productCode": "Aps",
    "releaseDate": "8/25/2020",
    "price": 94,
    "description": "EDP Services",
    "starRating": 7,
    "imageUrl": "http://dummyimage.com/122x100.png/ff4444/ffffff"
  }]

}

