import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {ExampleSelectors} from "../store/example.selectors";

@Component({
  selector: 'app-example-two',
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.scss']
})
export class ExampleTwoComponent {
  count$?: Observable<number>;
  message$?: Observable<string>

  constructor(private store$: Store) {
    this.count$ = this.store$.select(ExampleSelectors.count)
    //this.message$ = this.store$.select(ExampleSelectors.message)
  }


}
