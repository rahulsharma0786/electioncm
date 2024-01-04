import { useState } from "react"
import axios from "axios"
const Register=()=>{

const[input,setInput]=useState({})



const Handleinput=(e)=>{
const name=e.target.name
const value=e.target.value

setInput(values=>({...values,[name]:value}))


}

const inputsave=()=>{
    window.location.reload(false); 
axios.post("https://election-u79u.onrender.com/stusave",input).then(()=>{
    console.log("data save")
    
})
}



    return(
        <>

<div id="record">
<h2 style={{color:"red"}}>EVoting For Cm Candidate</h2>    
<label>Member</label>
<input type="text" name="name" value={input.name}  onChange={Handleinput} placeholder="Eneter member name"></input>
<label>Candidate</label>
<input type="text" name="cname" value={input.cname}  onChange={Handleinput} placeholder="Eneter candidate name"></input>


<button style={{marginTop:"8px"}} onClick={inputsave}>Submit</button>
</div>

  






        </>
    )
    
    }
export default Register


