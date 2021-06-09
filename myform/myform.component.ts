import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {
  // name = new FormControl('');
  name = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    lname:new FormControl(' '),
    big: new FormControl('', Validators.required),
    pop:new FormControl(' ',Validators.required)
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.name.value);
  }

  constructor() { 
   
  }

  ngOnInit(): void {
  }

}
