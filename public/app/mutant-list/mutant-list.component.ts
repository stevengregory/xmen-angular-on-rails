import { Component, OnInit } from '@angular/core';

import { Mutant } from '../core';
import { MutantListService } from './mutant-list.service';

@Component({
  selector: 'app-mutant-list',
  templateUrl: './mutant-list.component.html',
  styleUrls: ['./mutant-list.component.scss']
})
export class MutantListComponent implements OnInit {
  mutants: Mutant[];

  constructor(private mutantListService: MutantListService) {}

  ngOnInit() {
    this.getMutants();
  }

  getMutants() {
    this.mutantListService
      .getMutants()
      .subscribe(mutants => (this.mutants = mutants), error => console.log(error));
  }
}
