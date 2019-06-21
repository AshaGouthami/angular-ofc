import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { DemoMaterialModule} from './material-module';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { MatSelectComponent } from './mat-select/mat-select.component';
import { StepperComponent } from './stepper/stepper.component';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { AutocompletefilterComponent } from './autocompletefilter/autocompletefilter.component';
import { RadioComponent } from './radio/radio.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DrapdowmlistComponent } from './drapdowmlist/drapdowmlist.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { ServiceService } from './service.service';
import { DialogComponent } from './dialog/dialog.component';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef, MatIconModule } from '@angular/material';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';


const routes: Routes = [
 
  { path: 'reactiveform',       component: ReactiveformComponent},
  { path: 'mat-select',         component: MatSelectComponent},
  { path: 'stepper',            component: StepperComponent },
  { path: 'autocomplete',       component: AutocompleteComponent},
  { path: 'autocompletefilter', component: AutocompletefilterComponent},
  { path: 'radio',             component:  RadioComponent},
  { path: 'mycomponent',        component:  MycomponentComponent},
  { path: 'dialog',             component:  DialogComponent},
  
];


@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
    MatSelectComponent,
    StepperComponent,
    AutocompleteComponent,
    AutocompletefilterComponent,
    RadioComponent,
    DrapdowmlistComponent,
    MycomponentComponent,
    DialogComponent,
    DialogOverviewComponent,
    
  
  ],
  imports: [
    BrowserModule,
    CommonModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
     FormsModule,
     ShowHidePasswordModule,
     MatStepperModule,
     MatFormFieldModule,
     HttpClientModule,
     RouterModule.forRoot(routes),
     MatDialogModule
  ],
  providers: [ServiceService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }],
   
    bootstrap: [AppComponent],
 
})
export class AppModule { }
