import {AbstractControl, FormControl, ValidationErrors} from '@angular/forms';

export default function ValidateDomain (control:FormControl):ValidationErrors | null {
    if(!control.value.startsWith("https")){
        return {'ValidateDomain':true}
    }
    return null;
}
