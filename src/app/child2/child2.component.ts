import { Component, OnInit } from '@angular/core';
import { NewService } from '../newFile.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  parentAge: number = 0;
  parentName: string = '';

constructor(private newService:NewService){}
  ngOnInit() {
    this.parentAge = this.newService.getParentAge();
    this.parentName = this.newService.getParentName();
  }
}
