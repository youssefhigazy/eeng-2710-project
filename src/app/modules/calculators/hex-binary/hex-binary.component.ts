import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'hex-binary',
  templateUrl: './hex-binary.component.html',
  styleUrls: ['./hex-binary.component.scss']
})
export class HexBinaryComponent implements OnInit {

  form = new FormGroup({
    "hex_number": new FormControl("", Validators.required)
  })

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  convertToBinary(): void {
    window.location.replace(`https://codebeautify.org/hex-binary-converter?input=${this.form.get("hex_number").value}`);
  }

}
