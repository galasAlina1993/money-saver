import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

@NgModule({ // декоратор модуля. принимает на вход данные, необходимые для того, чтоб превратить класс AppModule в полнойенный NgModule
  declarations: [
    AppComponent // здесь находится массив компонентов, которые относятся к данному модулю.
  ],
  imports: [
    BrowserModule, // здесь  представлены прочие модули, которые использует приложение ангулар
    FormsModule
  ],
  providers: [], // провайдеры обеспечивают обмен данными. Здесь находятся сервисы и др вспомогательные функции для манипуляций с данными
  bootstrap: [AppComponent] // тут корневой компонент - с него начинается запуск приложения
})
export class AppModule { }
