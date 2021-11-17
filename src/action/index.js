export function incremnet(){
    return {type:"increment"}
}
export function incrementByAmount(number){
    return {type:"incremnetByAmount" , payload:number}
}
export function searchNews(newsList){
    return {type: 'news/search', payload: newsList}
  }
  
  export function fetchMoreNews(newsList){
    return {type: 'news/fetchmore', payload: newsList}
  }