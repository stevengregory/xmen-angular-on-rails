import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Mutant } from '../core';

@Injectable()
export class MutantListService {
  private apiUrl = 'http://localhost:3000/mutants';

  constructor(private http: HttpClient) {}

  getMutants() {
    return this.http
      .get<Mutant[]>(this.apiUrl)
      .pipe(map(res => res), catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return Observable.throw(res.error || 'Server error');
  }
}
