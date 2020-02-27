import { Component,OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import{Observable} from'rxjs';
import {map,startWith} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  notifications = 3;
  showSpinner=false;
  opened=false;
  log(state){
    console.log(state)
  }

  loadData(){
    this.showSpinner=true;
    setTimeout(()=>{
      this.showSpinner=false;
    },5000);
  }

  logChange(index){
    console.log(index)
  }
   
  options: string[]=['Angular','React','Vue','HTML','CSS','JS','HTML5','Valami'];
  objectOptions=[
    {name:'Angular'},
    {name:'Angular Material'},
    {name:'React'},
    {name:'Vue'},
    {name:'HTML'},
    {name:'CSS'},
    {name:'Bootstrap'},
    {name:'HTML5'},
    {name:'JS'},
    {name:'jQuery'},
    {name:'Valami'},
  ];

  displayFn(subject){
    return subject ? subject.name :undefined;
  }
/*Ezzel történik az autocomplete a formnál */
  myControl = new FormControl();
  filteredOptions:Observable<string[]>;

  ngOnInit(){
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value=>this._filter(value))
    );
  }
  private _filter(value:string):string[]{
    const filterValue= value.toLocaleLowerCase();
    return this.options.filter(option=>
      option.toLowerCase().includes(filterValue)
      );
  }
  minDate= new Date();
  maxDate=new Date(2020,3,10);

  dateFilter= date =>{
    const day = date.getDay();
    return day!=0 && day!=6;
  }

}
