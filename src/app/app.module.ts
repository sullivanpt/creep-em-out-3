import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PersonaCardComponent } from './persona-card/persona-card.component';
import { MaterialTestComponent } from './material-test/material-test.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaCardComponent,
    MaterialTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
