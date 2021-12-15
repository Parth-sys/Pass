
import React, { useState ,useEffect} from "react"; 
import {Row,Col,Container} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from  "axios";


function Login(){

const [email, setemail] = useState(" ");



useEffect(()=>{

},[])








const  handlesub= async(e)=>{
e.preventDefault();
try{
  
  var response= await axios.post("http://localhost:5000/sendmail",{
    email,
    
  });
    console.log(response.data)

  
     

  
}
catch(err){
    console.log(err)
}
}


return(
  <>
<Container>
  <Row className="justify-content-md-center">
    <Col xs lg="2">

    <Form onSubmit={handlesub}>
<Row className="mb-3">

<Col>

<Form.Group  
        md="4" controlId="formBasicEmail" >
<Form.Label>Email</Form.Label>
<Form.Control type="text" placeholder="Enter username"    onChange={e => setemail(e.target.value)}   />
</Form.Group>




</Col>






</Row>



<Button variant="primary" type="submit">
Submit
</Button>
</Form>

    </Col>
    </Row>
    </Container>

</>

)

}

export default Login  ;
