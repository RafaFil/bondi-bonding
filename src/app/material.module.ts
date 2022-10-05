import {NgModule} from '@angular/core'

import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
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
    MatDialogModule
];

@NgModule({
    imports: [...MaterialComponents],
    exports: [...MaterialComponents],
})
export class MaterialModule {}
