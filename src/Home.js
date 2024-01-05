import { useState } from "react"
import axios from "axios"
import surendra from "./surendra.jpg"
import car from "./car.png"
import dharmendra from "./dharmendra.jpeg"
import Jhopdi from "./jhopi1.jpg"

import santosh from "./santosh.jpg"
import tea from "./tea.jpg"


import rajesh from "./rajesh.jpg"
import peg from "./peg.jpg"
const Register=()=>{

const[input,setInput]=useState({})



const Handleinput=(e)=>{
const name=e.target.name
const value=e.target.value

setInput(values=>({...values,[name]:value}))


}

const inputsave=()=>{
    alert("Thankyou For Votind")
axios.post("https://election-u79u.onrender.com/stusave",input).then(()=>{
    console.log("data save")
    
})
}



    return(
        <>
        <div>
            <div>
                <h2 style={{color:"red", fontWeight:"bolder",marginTop:"10px",marginLeft:"30px"}}>X:-Cm Candidate-:X</h2>
                
                <div style={{display:"flex",marginTop:"30px"}}>
            <img src={surendra} height="120px" width="150px" style={{borderRadius:"10%"}}/>
            <div style={{height:"120px",width:"160px", border:"1px solid blue",backgroundColor:"whitesmoke",borderRadius:"10%",padding:"5px"}}>
                <h3>surendra Dodiya</h3>
                <h4>Profeshan:Teacher</h4>
                <img src={car} style={{height:"60px",width:"70px"}}/>
            </div>
            </div>

            <div style={{display:"flex",marginTop:"10px"}}>
            <img src={santosh} height="120px" width="150px" style={{borderRadius:"10%"}}/>
            <div style={{height:"120px",width:"160px", border:"1px solid blue",backgroundColor:"whitesmoke",borderRadius:"10%",padding:"5px"}}>
                <h3>santosh Meena</h3>
                <h4>Profeshan:Tea bussness</h4>
                <img src={tea} style={{height:"50px",width:"70px"}}/>
            </div>
            </div>

            <div style={{display:"flex",marginTop:"10px"}}>
            <img src={dharmendra} height="120px" width="150px" style={{borderRadius:"10%"}}/>
            <div style={{height:"120px",width:"160px", border:"1px solid blue",backgroundColor:"whitesmoke",borderRadius:"10%",padding:"5px"}}>
                <h3>Dharmendra sharma</h3>
                <h4>Profeshan:Lic agent</h4>
                <img src={Jhopdi} style={{height:"50px",width:"80px"}}/>
            </div>
            </div>

            <div style={{display:"flex",marginTop:"10px"}}>
            <img src={rajesh} height="120px" width="150px" style={{borderRadius:"10%"}}/>
            <div style={{height:"120px",width:"160px", border:"1px solid blue",backgroundColor:"whitesmoke",borderRadius:"10%",padding:"5px"}}>
                <h3>Rajesh Raniya</h3>
                <h4>Profeshan:Bussness</h4>
                <img src={peg} style={{height:"60px",width:"80px"}}/>
            </div>
            </div>
            </div>
            </div>

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


