import { NgModule } from '@angular/core'

import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';


const MaterialComponents = [
    MatCheckboxModule,
    MatIconModule,
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
    MatStepperModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDialogModule,
    MatGridListModule,
    OverlayModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatTabsModule,
    MatToolbarModule,
    MatDividerModule,
    MatBadgeModule,
    MatListModule,
    MatMenuModule,
    MatSnackBarModule,
    MatChipsModule,
    MatFormFieldModule,
    MatNativeDateModule
];

@NgModule({
    imports: [...MaterialComponents],
    exports: [...MaterialComponents],
})
export class MaterialModule {}
