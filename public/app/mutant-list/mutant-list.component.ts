import { Component, OnInit } from '@angular/core';

import { MutantListService } from './mutant-list.service';

@Component({
  selector: 'app-mutant-list',
  templateUrl: './mutant-list.component.html',
  styleUrls: ['./mutant-list.component.scss']
})
export class MutantListComponent implements OnInit {
  mutants: Object;
  error: any;

  constructor(private mutantListService: MutantListService) {}

  ngOnInit(): void {
    this.getMutants();
  }

  getMutants(): void {
    this.mutantListService
      .getMutants()
      .subscribe((data: any) => this.mutants = data,
      error => console.log(error));
  }
}
