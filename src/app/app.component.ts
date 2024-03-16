import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewService } from './newFile.service'; 
import { DataService } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'serviceApplication';
  NameFromParent:string = '';

  //start parent to child
  nameTochild:string = ' ';
  //end

  //child to parent
  childtoparent:string =''

  onchildnameChnage(event:string):void{
    this.childtoparent =event;
  }
  //end

  //routing 

  //parameter passthorugh the url and dispaying to that component

    name:string =''
    age:number=0;
    

  //service
 constructor(private router:Router , private newService:NewService,private  dataService:DataService){}

    get count() {
      return this.dataService.count;
    } 
 
 
  onchild1Buttonclicked(){
    this.router.navigateByUrl('child1');
    }
    onchild2Buttonclicked(){
      this.newService.setParentName(this.name);
      this.newService.setParenTAge(this.age);
      this.router.navigateByUrl('/child2');    
      }
  }

