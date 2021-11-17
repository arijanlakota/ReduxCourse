import { searchApi } from "../api"
import { createSlice } from '@reduxjs/toolkit'
export const SearchNews = createSlice({
    name: 'newser',
    initialState: {
      value: 0,
      searchArr:[],
      lang:"",
      title:"",
      source:"",
      radio:""
    },
    reducers: {
      top_headlines: (state) => {
        searchApi
        .get(`everything?q=${state.search}&language=${state.lang}&qInTitle=${state.title}&sources=${state.source}&sortBy=${state.radio}
        &apiKey=bacbe26a9e9c405c979c5245b7644fb9`)
        .then((result) => {
          state.searchArr = [...result.data.articles]
        })
        .catch((error) => {
          console.log(error);
        })
      },
      
    },
  })
  
  // Action creators are generated for each case reducer function
  export const {top_headlines } = SearchNews.actions
  
  export default SearchNews.reducer