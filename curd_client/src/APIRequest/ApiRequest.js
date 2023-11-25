
import axios from "axios";

export async function Read (){
    try{
       
        ////fetch
        let res=await fetch ("http://localhost:5050/api/v1/GetAllStudent")
        let JSONData=await res.json();
        return JSONData['data'];
    }
    catch(ex){
        return []
    }
  
}

export async function Create (postBody){
    try{
        let url="http://localhost:5050/api/v1/CreateStudent";
   
        let res= await axios.post(url,postBody);
        if(res.status===200){
            return true
         }
         else {
    
             return false
         }


    }
    catch(ex){
       return false
    }
   
}

export async function Update (postBody,id){
  
     try{
        let url="http://localhost:5050/api/v1/UpdateStudent/" + id
   
        let res= await axios.post(url,postBody);
        if(res.status===200){
            return true
         }
         else {
    
             return false
         }
    }
    catch(ex){
       return false
    }
}

export async function Delete (id){
    try{
       
        let res=await fetch ("http://localhost:5050/api/v1/DeleteStudent/" + id)
        let JSONData=await res.json();
        if(JSONData['status']==="success")
        {
           return true;
        }
        else{
          return false;
        }

    }
    catch(ex){
        return false

    }
}
export async function GetById (id){
    try{
       
        let res=await fetch ("http://localhost:5050/api/v1/GetStudentById/" + id)
        let JSONData=await res.json();
        return JSONData['data'][0];

    }
    catch(ex){
       return []
    }
    
}







