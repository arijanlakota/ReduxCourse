export function incremnet(){
    return {type:"increment"}
}
export function incrementByAmount(number){
    return {type:"incremnetByAmount" , payload:number}
}