import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Mutant } from './mutant';

@Injectable()
export class MutantListService {
  private apiUrl = 'http://localhost:3000/mutants';

  constructor(private http: Http) {}

  getMutants(): Observable<Array<Mutant>> {
    return this.http
      .get(this.apiUrl)
      .map((response: Response) => response.json() as Mutant[]);
  }
}
