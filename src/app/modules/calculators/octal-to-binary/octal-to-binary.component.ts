import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'octal-to-binary',
  templateUrl: './octal-to-binary.component.html',
  styleUrls: ['./octal-to-binary.component.scss']
})
export class OctalToBinaryComponent implements OnInit {
  
  form = new FormGroup({
    "octal_number": new FormControl("", Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

  convertToBinary(): void{
    window.location.replace(`https://codebeautify.org/octal-binary-converter?input=${this.form.get("octal_number").value}`);
  }

}
