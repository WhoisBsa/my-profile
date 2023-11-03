import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TUI_SANITIZER, TuiButtonModule, TuiRootModule } from "@taiga-ui/core";
import { TUI_LANGUAGE, TUI_PORTUGUESE_LANGUAGE } from '@taiga-ui/i18n';
import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TuiInputModule, TuiTextareaModule, TuiToggleModule } from '@taiga-ui/kit';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    TuiRootModule,
    TuiButtonModule,
    TuiInputModule,
    TuiTextareaModule,
    TuiToggleModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
      }
    }),
  ],
  providers: [
    {provide: TUI_SANITIZER, useClass: NgDompurifySanitizer},
    { provide: TUI_LANGUAGE, useValue: of(TUI_PORTUGUESE_LANGUAGE)}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
