import { NgModule } from '@angular/core';
import {MatButtonModule,
  MatButtonToggleModule,
  MatIconModule, 
  MatProgressSpinnerModule, 
  MatToolbarModule, 
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatRadioModule,
  MatCheckboxModule,
  MatDatepickerModule,
  NativeDateModule,
  MatNativeDateModule, 
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
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatRadioModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule
  
  
];

@NgModule({
  
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
