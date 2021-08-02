import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {ExampleActions} from "../store/example.actions";

@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.scss']
})
export class ExampleOneComponent{
  message: string=''

  constructor(private store$: Store) { }

  increaseCount() {
    this.store$.dispatch(ExampleActions.increaseCount())
  }

  sendMessage() {

  }
}

