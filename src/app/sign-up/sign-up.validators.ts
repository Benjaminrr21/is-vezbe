import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class Validatori {
    static neMozeRazmaci(element:AbstractControl):ValidationErrors | null {
        let value = element.value as string;
        if(value.indexOf(' ') != -1)
            return { nemozerazmaci : true}
        return null;
    }
    static zauzetoIme(element:AbstractControl) :Promise<ValidationErrors | null> {
        const imena = ['Benjamin','Aladin'];
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(imena.indexOf(element.value as string)!= -1) 
                 resolve({zauzetoime:true})
                else 
                 resolve(null)
            },3000);
        })
    }
}