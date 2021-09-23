import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'binary-hex',
  templateUrl: './binary-hex.component.html',
  styleUrls: ['./binary-hex.component.scss']
})
export class BinaryHexComponent implements OnInit {

  form = new FormGroup({
    "binary_number": new FormControl("", Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

  convertToHex(): void{
    window.location.replace(`https://codebeautify.org/binary-hex-converter?input=${this.form.get("binary_number").value}`);
  }

}
