import axios from "axios"
import { useEffect, useState } from "react"
import Studentdisplay from "./Studentdisplay"
const Display=()=>{
const [studata,setStudata]=useState([])

const loadData=()=>{
axios.get("https://election-u79u.onrender.com/studisplay").then((res)=>{
setStudata(res.data)
})    
}

useEffect(()=>{
    loadData()
},[])

const mydata=studata.map((key)=>
<Studentdisplay
name={key.name}
cname={key.cname}

/>
)

return(
    <>
    
    <div style={{display:"flex"}}>
    <div className="display">
    
<table border="1" align="center" width="240px" height="50px" bgcolor="orange">
<tr>
<td>Member Name</td>
<td>Candidate Name</td>

</tr>
{mydata}
</table>
</div>
</div>
    </>
)
}

export default Display