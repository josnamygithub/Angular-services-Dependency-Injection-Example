import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  NameFromchild:string ='';

  //for parent data displaying to child component , 
  //adding two decorator child component is ready to accpet input
  
   //for parent to child
  @Input() storeparentdata:string =' ';
  // end
  // for child to parent
  childToparent:string ='';
  
  @Output() onNameChange :EventEmitter<string> = new EventEmitter<string>();
  
  onInputChange(event:string):void{
    this.onNameChange.emit(event);
  
  }
   //end
  
  }
