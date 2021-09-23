import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCalculatorsComponent } from './all-calculators/all-calculators.component';
import { BinaryHexComponent } from './binary-hex/binary-hex.component';
import { BinaryToDecimalComponent } from './binary-to-decimal/binary-to-decimal.component';
import { BinaryToOctalComponent } from './binary-to-octal/binary-to-octal.component';
import { DecimalToBinaryComponent } from './decimal-to-binary/decimal-to-binary.component';
import { HexBinaryComponent } from './hex-binary/hex-binary.component';
import { OctalToBinaryComponent } from './octal-to-binary/octal-to-binary.component';

const routes: Routes = [
  { path: "", component: AllCalculatorsComponent },
  { path: "convert-hex-to-binary", component: HexBinaryComponent },
  { path: "convert-binary-to-hex", component: BinaryHexComponent },
  { path: "convert-octal-to-binary", component: OctalToBinaryComponent },
  { path: "convert-binary-to-octal", component: BinaryToOctalComponent },
  { path: "convert-decimal-to-binary", component: DecimalToBinaryComponent },
  { path: "convert-binary-to-decimal", component: BinaryToDecimalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorsRoutingModule { }
