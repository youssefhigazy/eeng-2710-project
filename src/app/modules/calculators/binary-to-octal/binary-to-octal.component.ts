import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'binary-to-octal',
  templateUrl: './binary-to-octal.component.html',
  styleUrls: ['./binary-to-octal.component.scss']
})
export class BinaryToOctalComponent implements OnInit {

  form = new FormGroup({
    "binary_number": new FormControl("", Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

  convertToOctal(): void{
    window.location.replace(`https://codebeautify.org/binary-octal-converter?input=${this.form.get("binary_number").value}`);
  }
}
