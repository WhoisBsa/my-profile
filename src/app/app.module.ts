import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TUI_SANITIZER, TuiAlertModule, TuiButtonModule, TuiDialogModule, TuiExpandModule, TuiRootModule } from "@taiga-ui/core";
import { TUI_LANGUAGE, TUI_PORTUGUESE_LANGUAGE } from '@taiga-ui/i18n';
import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";


import { of } from "rxjs";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
      TuiRootModule,
      TuiDialogModule,
      TuiAlertModule,
      TuiExpandModule,
      TuiButtonModule,
],
  providers: [
    {provide: TUI_SANITIZER, useClass: NgDompurifySanitizer},
    { provide: TUI_LANGUAGE, useValue: of(TUI_PORTUGUESE_LANGUAGE)}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
