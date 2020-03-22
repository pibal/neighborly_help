import { ValidatorFn, AbstractControl } from '@angular/forms';

export function samePasswordValidator(
  passwordControlName: string
): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const parentControl = control.parent;
    let passwordValue;
    if (parentControl)
      passwordValue = parentControl.get(passwordControlName).value;

    return control.value === passwordValue
      ? null
      : { passwordsNotMatching: true };
  };
}
