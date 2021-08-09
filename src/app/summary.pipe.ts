import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:"summary"
})

export class SummaryPipe implements PipeTransform{
    transform(value:any, args?:any){

        if(!value)
            return null;
//        value = value.replace(/\s/g, '');
        const strArr = value.split(" ");
        return strArr.map(function(word:any){
            if(word != "")
           return word.replace(word[0],word[0].toUpperCase());
        }).join(" ");
    }
}