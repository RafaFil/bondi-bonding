import {NgModule} from '@angular/core'

import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

const MaterialComponents = [
    MatFormFieldModule,
    MatIconModule,
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
    MatStepperModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDialogModule
];

@NgModule({
    imports: [...MaterialComponents],
    exports: [...MaterialComponents],
})
export class MaterialModule {}
