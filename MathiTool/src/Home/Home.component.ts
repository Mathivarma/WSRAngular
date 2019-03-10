import { Component } from '@angular/core';
// import {HomeService} from   './Home.service';

@Component({
  selector: 'Home-root',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent {
  defect:any;
  userStory:any;
  totalCount:any;
  totalText:any;
  constructor() {
    this.defect = '0';
    this.userStory=0;
    this.totalCount=0;
    this.totalText='Am goint to be the text';
  }
  handleClick(totalCount1:any) {
    alert(totalCount1);
    console.log(this.totalText);
    // this.totalCount=  this.homeService.addHero(this.totalText)
    // .subscribe(totalText => this.totalText.push(totalText));
  }

//   fetchBooks(): void {
//     this.homeService.getBooksWithObservable()
//   .subscribe( books => this.books = books,
//                     error => this.errorMessage = <any>error);    
// }
}
