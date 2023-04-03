import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2';

export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    user:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,
    item:localStorage.getItem("item")?JSON.parse(localStorage.getItem("item")):[] ,
    accunt:localStorage.getItem("item-account")?JSON.parse(localStorage.getItem("item-account")):[] ,
    favcount:0,
  },
  reducers: {
    login: (state,action) => {
      state.user=action.payload;
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })

      localStorage.setItem("user",JSON.stringify(state.user))
    },
    logout: (state,action) => { 
      state.user=null
      localStorage.setItem("user",state.user)
      return state
        },
    AddProdectInItemPage:(state,action)=>{
    state.item=[];
    let pluscount={...action.payload}
    state.item.push(pluscount);
    localStorage.setItem("item",JSON.stringify(state.item))

},
AdditemInfavpage:(state,action)=>{

const heart=document.querySelector(".fav .fa-heart");
const redpoint=document.querySelector(".redpoint");
heart.style.color="red";
redpoint.style.display="block"

  const indexitem=state.accunt.findIndex((Item)=>Item.id === action.payload.id);
  console.log(indexitem)
  if(indexitem >= 0){
    state.accunt[indexitem] = {
    ...state.accunt[indexitem],};
    state.favcount++;
  }else{
      let pluscount={...action.payload}
           state.accunt.push(pluscount)
           state.favcount =1;
  }
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: ' Property saved'
  })


  localStorage.setItem("item-account",JSON.stringify(state.accunt))

},
delet:(state,action)=>{
  const nextCartItems = state.accunt.filter(
    (item) => item.id !== action.payload.id
    );
    state.favcount--;  
    state.accunt = nextCartItems;
},
DeletAll:(state,action)=>{
  state.accunt =[];
  state.favcount =0;
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: ' Property Delet'
  })
  localStorage.setItem("item-account",state.accunt)
}, 
messege:(state,action)=>{
  Swal.fire({
    input: "textarea",
    inputLabel: "Message",
    inputPlaceholder: "Type your message here...",
    inputAttributes: {
      "aria-label": "Type your message here",
    },
    showCancelButton: true,
  });
}

    }
    
  },)

// Action creators are generated for each case reducer function
export const { login,logout,AddProdectInItemPage,AdditemInfavpage,DeletAll,delet,messege} = counterSlice.actions
export const selector=(state)=>state.user.user;
export const selectoritem=(state)=>state.user.item;
export const selectoraccont=(state)=>state.user.accunt;
export const favcounter=(state)=>state.user.favcount;


export default counterSlice.reducer