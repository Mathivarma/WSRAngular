import { Component } from '@angular/core';
import {HomeService} from   './Home.service';
import { Counter } from './model/Counter';
@Component({
  selector: 'Home-root',
  providers:[HomeService],
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent {
  defect:any;
  userStory:any;
  totalCount:any;
  totalText:any;
  
  tutput: Counter = {
    allus: 0,
    defectCount: 0,
    uscount:0
};
  constructor(private homeService:HomeService) {
    this.defect = '0';
    this.userStory=0;
    this.totalCount=0;
    this.totalText='Am goint to be the text';
    // this.tutput.allus=0;
    // this.tutput.defectCount=0;
    // this.tutput.uscount=0;
  }
  handleClick(totalCount1:string) {
    alert(totalCount1);
    console.log(this.totalText);
        this.homeService.addHero(this.totalText.replace(/[^a-zA-Z0-9]/g, ''))
      .subscribe(val =>this.tutput=val);
      
      console.log(this.tutput.allus);
      console.log(this.tutput.defectCount);
      console.log(this.tutput.uscount);
  }

//   fetchBooks(): void {
//     this.homeService.getBooksWithObservable()
//   .subscribe( books => this.books = books,
//                     error => this.errorMessage = <any>error);    
// }
}
