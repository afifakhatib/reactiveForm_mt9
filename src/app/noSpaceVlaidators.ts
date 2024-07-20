import { AbstractControl, ValidationErrors } from "@angular/forms";


export class noSpaceValidator{
    static noSpace(control : AbstractControl) : ValidationErrors | null {

        let val = control.value as string;

        if(!val){
            return null
        }

        if(val.includes(' ')){
            return {
                noSpaceErr : 'no space is allowed.'
            }
        }else{
            return null
        }
    }
}