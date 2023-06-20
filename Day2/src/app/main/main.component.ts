import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
cars: {name : string, brand : string}[] = [{
  name: "Golf",
  brand: "VW"
},{
  name: "Diablo",
  brand: "Lamborghini"
},{
  name: "Carrera",
  brand: "Porsche"
}];
}
