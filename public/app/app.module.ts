import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    HttpModule
  ],
  providers: [MutantListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
