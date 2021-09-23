import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'binary-to-decimal',
  templateUrl: './binary-to-decimal.component.html',
  styleUrls: ['./binary-to-decimal.component.scss']
})
export class BinaryToDecimalComponent implements OnInit {

  form = new FormGroup({
    "binary_number": new FormControl("", Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

  convertToDecimal(): void{
    window.location.replace(`https://codebeautify.org/binary-decimal-converter?input=${this.form.get("binary_number").value}`);
  }
}
