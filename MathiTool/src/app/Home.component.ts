import { Component } from '@angular/core';
import {HomeService} from   './Home.service';

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
  tutput:string;
  constructor(private homeService:HomeService) {
    this.defect = '0';
    this.userStory=0;
    this.totalCount=0;
    this.totalText='Am goint to be the text';
  }
  handleClick(totalCount1:string) {
    alert(totalCount1);
    console.log(this.totalText);
        this.homeService.addHero(this.totalText.replace(/[^a-zA-Z0-9]/g, ''))
      .subscribe(val =>this.tutput=val);
      
      console.log(this.tutput);
  }

//   fetchBooks(): void {
//     this.homeService.getBooksWithObservable()
//   .subscribe( books => this.books = books,
//                     error => this.errorMessage = <any>error);    
// }
}
