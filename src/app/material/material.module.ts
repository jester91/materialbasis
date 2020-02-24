import { NgModule } from '@angular/core';
import {MatButtonModule,
  MatButtonToggleModule,
  MatIconModule, 
  MatProgressSpinnerModule, 
  MatToolbarModule, 
  MatSidenavModule,
  MatMenuModule,
  MatListModule, 
  } from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge'
const MaterialComponents=[
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule
  
];

@NgModule({
  
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
