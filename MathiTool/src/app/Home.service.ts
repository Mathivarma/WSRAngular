import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
const ParseHeaders = {
    headers: new HttpHeaders({
     'Content-Type'  : 'application/x-www-form-urlencoded'
    })
   };

@Injectable()
export class HomeService {
     url = "http://localhost:9090/WsrCount";
    constructor(private http:HttpClient) { }
    
   
   /* addBookWithObservable(book:Book): Observable<Book> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this.http.post(this.url, book, options)
                       .map(this.extractData)
                       .catch(this.handleErrorObservable);
        }
    addBookWithPromise(book:Book): Promise<Book> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this.http.post(this.url, book, options).toPromise()
                   .then(this.extractData)
                       .catch(this.handleErrorPromise);
        }
    private extractData(res: Response) {
        let body = res.json();
            return body || {};
        }
        private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
        }
        private handleErrorPromise (error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
        }*/
        addHero (hero: string): Observable<string> {

            let a=this.http.post<string>(this.url, hero, ParseHeaders);
            console.log(a);
            return a;

            
          }
       }

       