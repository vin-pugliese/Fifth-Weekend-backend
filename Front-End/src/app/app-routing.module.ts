import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisdettaComponent } from './Components/disdetta/disdetta.component';
import { NewSpettacoloComponent } from './Components/new-spettacolo/new-spettacolo.component';
import { PrenotazioneComponent } from './Components/prenotazione/prenotazione.component';
import { SpettacoloDetailComponent } from './Components/spettacolo-detail/spettacolo-detail.component';
import { ListSpettacoliComponent } from './list-spettacoli/list-spettacoli.component';

const routes: Routes = [
{
  path: "", component: ListSpettacoliComponent
}, 
{
  path: "spettacolo/:id", component: SpettacoloDetailComponent,
  children : [
    {
      path: "disdetta/:id/:nome/:tel", component: DisdettaComponent
    }
  ]
},
{
  path: "nuovospettacolo", component : NewSpettacoloComponent
},
{
  path: "nuovaprenotazione", component : PrenotazioneComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
