import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'decimal-to-binary',
  templateUrl: './decimal-to-binary.component.html',
  styleUrls: ['./decimal-to-binary.component.scss']
})
export class DecimalToBinaryComponent implements OnInit {

  form = new FormGroup({
    "decimal_number": new FormControl("", Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

  convertToBinary(): void{
    window.location.replace(`https://codebeautify.org/decimal-binary-converter?input=${this.form.get("decimal_number").value}`);
  }

}
