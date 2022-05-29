import { Subject } from "rxjs";

export class SeachTerm {
  _value: string = "";
  valueChanged = new Subject<SeachTerm>();
  get value(): string{
    return this._value;
  }

  set value(value: string){
    this._value = value;
    this.valueChanged.next(this);
  }
}
