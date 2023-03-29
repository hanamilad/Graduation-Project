import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    user:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,
  },
  reducers: {
    login: (state,action) => {

      state.user=action.payload;
      localStorage.setItem("user",JSON.stringify(state.user))
    },
    logout: (state,action) => { 
      state.user=null
      localStorage.setItem("user",state.user)
      return state
        },
  },
})

// Action creators are generated for each case reducer function
export const { login,logout} = counterSlice.actions
export const selector=(state)=>state.user.user;


export default counterSlice.reducer