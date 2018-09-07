import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/module';
import { AppRoutingModule } from './app-routing.module';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './reducers';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';


@NgModule({ //
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    StoreDevtoolsModule.instrument({name: 'store devtools', logOnly: environment.production}),
    EffectsModule.forRoot([])
  ],
  exports: [],
  providers: [], // провайдеры обеспечивают обмен данными. Здесь находятся сервисы и др вспомогательные функции для манипуляций с данными
  bootstrap: [AppComponent] // тут корневой компонент - с него начинается запуск приложения
})
export class AppModule { }
