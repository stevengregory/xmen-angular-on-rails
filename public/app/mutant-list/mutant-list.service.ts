import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Mutant } from './mutant';

@Injectable()
export class MutantListService {
  private apiUrl = 'http://localhost:3000/mutants';

  constructor(private http: Http) {}

  getMutants(): Observable<Mutant[]> {
    return this.http
      .get(this.apiUrl)
      .map((res: Response) => res.json() as Mutant[])
      .catch((error: any) => {
        console.error('Magneto has caused an error', error);
        return Observable.throw(error.message || error);
      });
  }
}
