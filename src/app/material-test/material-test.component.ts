import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-test',
  templateUrl: './material-test.component.html',
  styleUrls: ['./material-test.component.scss']
})
export class MaterialTestComponent implements OnInit {



   isDarkTheme: boolean = false;



  foods: any[] = [

    {name: 'Pizza', rating: 'Excellent'},

    {name: 'Burritos', rating: 'Great'},

    {name: 'French fries', rating: 'Pretty good'},

  ];



  progress: number = 0;

  constructor() {

    // Update the value for the progress-bar on an interval.

    setInterval(() => {

      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;

    }, 200);

  }

  ngOnInit() {
  }
}
