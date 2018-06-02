import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MutantListService } from './mutant-list.service';
import { Mutant } from './mutant';

@Component({
  selector: 'app-mutant-list',
  templateUrl: './mutant-list.component.html',
  styleUrls: ['./mutant-list.component.scss']
})
export class MutantListComponent implements OnInit {
  mutants: Mutant[] = [];

  constructor(private mutantListService: MutantListService) {}

  ngOnInit(): void {
    this.getMutants();
  }

  getMutants() {
    this.mutantListService
      .getMutants()
      .subscribe((data: any) => this.mutants = data,
      error => console.log(error));
  }
}
