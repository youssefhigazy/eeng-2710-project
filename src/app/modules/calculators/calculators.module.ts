import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorsRoutingModule } from './calculators-routing.module';
import { HexBinaryComponent } from './hex-binary/hex-binary.component';
import { AllCalculatorsComponent } from './all-calculators/all-calculators.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BinaryHexComponent } from './binary-hex/binary-hex.component';
import { OctalToBinaryComponent } from './octal-to-binary/octal-to-binary.component';
import { BinaryToOctalComponent } from './binary-to-octal/binary-to-octal.component';
import { DecimalToBinaryComponent } from './decimal-to-binary/decimal-to-binary.component';
import { BinaryToDecimalComponent } from './binary-to-decimal/binary-to-decimal.component';


@NgModule({
  declarations: [
    AllCalculatorsComponent,
    HexBinaryComponent,
    BinaryHexComponent,
    OctalToBinaryComponent,
    BinaryToOctalComponent,
    DecimalToBinaryComponent,
    BinaryToDecimalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalculatorsRoutingModule
  ],
  exports: [
    AllCalculatorsComponent,
    HexBinaryComponent
  ]
})
export class CalculatorsModule { }
