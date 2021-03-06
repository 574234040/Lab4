import { BookEditPage } from './../pages/book-edit/book-edit';
import { BookdetailPage } from './../pages/bookdetail/bookdetail';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BookListPage } from './../pages/book-list/book-list';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BookRestProvider } from '../providers/book-rest/book-rest';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BookListPage,
    BookdetailPage,
    BookEditPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BookListPage,
    BookdetailPage,
    BookEditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BookRestProvider
  ]
})
export class AppModule {}
