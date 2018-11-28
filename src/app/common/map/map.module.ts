import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    MapComponent
  ],
  exports: [
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDpxebEnVe8ly-VN2x1QCifR2ENnaBV38s'
    })
  ],
  providers: [],
  bootstrap: []
})
export class MapModule { }
