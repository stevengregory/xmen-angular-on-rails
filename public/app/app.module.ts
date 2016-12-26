import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MutantListComponent } from './mutant-list/mutant-list.component';
import { MutantListService } from './mutant-list/mutant-list.service';

@NgModule({
  declarations: [
    AppComponent,
    MutantListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MutantListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
