import { AbstractControl, ValidationErrors } from "@angular/forms";


export class EmpIdValidator{
    static EmpId(control : AbstractControl) : ValidationErrors | null {

        let val = control.value as string;

        let regExp = /^[A-Z]\d{3}$/.test(val)

        // let empId = regExp.test()

        if(!val){
            return null;
        }

        if(!regExp){
            return {
                 EmpIdErr : '  Emp Id only includes 1 upperCase 3 numbers.'
            }
        }
        else{
            return null
        }
    }
}