import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class NewService{ // @Injectable class created a a singlton 

   
private parentName: string ='';
private parentAge: number=0;

getParentName():string{
    return this.parentName;
}

getParentAge():number{
    return this.parentAge;
}

setParentName(name:string):void{
    this.parentName=name;
}
setParenTAge(age :number):void{
    this.parentAge=age;
}
}
