import {NgModule} from '@angular/core'

import { MatIconModule } from '@angular/material/icon'
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

const MaterialComponents = [
    MatFormFieldModule,
    MatIconModule,
    MatSliderModule,
    MatButtonModule
];

@NgModule({
    imports: [...MaterialComponents],
    exports: [...MaterialComponents],
})
export class MaterialModule {}
