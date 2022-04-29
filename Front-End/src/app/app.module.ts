import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { ListSpettacoliComponent } from './list-spettacoli/list-spettacoli.component';
import { NewSpettacoloComponent } from './Components/new-spettacolo/new-spettacolo.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PrenotazioneComponent } from './Components/prenotazione/prenotazione.component';
import { SpettacoloDetailComponent } from './Components/spettacolo-detail/spettacolo-detail.component';
import { DisdettaComponent } from './Components/disdetta/disdetta.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ListSpettacoliComponent,
    NewSpettacoloComponent,
    PrenotazioneComponent,
    SpettacoloDetailComponent,
    DisdettaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
