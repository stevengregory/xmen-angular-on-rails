import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Mutant } from '../core';

@Injectable()
export class MutantListService {
  private apiUrl = 'http://localhost:3000/mutants';

  constructor(private http: HttpClient) {}

  getMutants() {
    return this.http
      .get<Observable<Mutant[]>>(this.apiUrl)
      .pipe(map((res) => res));
  }
}
