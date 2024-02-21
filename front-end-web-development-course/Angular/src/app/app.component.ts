import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Welcome to Angular';
  description = 'Welcome to my first Angular project';

  months = ["January","February","March","April","May","June","July","August","September","October","Nobember","December"];

  simplePipeData = "This is going really well!"

  isAvailable = false;

  setTrue (){
    console.log("now we have set the value to True")
  }

  setFalse (){
    console.log("now we have set the value to False")
  }

}
