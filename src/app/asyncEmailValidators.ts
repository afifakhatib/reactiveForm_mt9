import { AbstractControl, ValidationErrors } from '@angular/forms';

export class AsyncEmailValidator {
  static emailExist(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    
    let val = control.value as string;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (val === 'khatibadiba12@gmail.com') {
          resolve({
            emailExistErr: 'This email is already in use.',
          });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
