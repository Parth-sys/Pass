import React, { useState } from "react";
import {Row,Col, Container} from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from  "axios";
import { Navigate } from "react-router";

function Forgetpass(){
   


    const [ran,setran]=useState("");
   
    const  handlesub= async(e)=>{
        e.preventDefault();
        try{
          
          var response= await axios.post("http://localhost:5000/reset",{
            ran
            
          });
            
          if(response){
            Navigate("/Reset")
          }
     
          



          
        }
        catch(err){
            console.log(err)
        }
        }




    return(
        <>
        <Container>
        <Form onSubmit={handlesub}>
        <Row className="mb-3">
        
        <Col>
        
        <Form.Group  
                md="4" controlId="formBasicEmail" >
        <Form.Label>Code</Form.Label><br/>
        <Form.Control type="text" placeholder="Enter Code"    onChange={e => setran(e.target.value)}   />
        </Form.Group>
        
        </Col>
        
        
        </Row>
        
        
        
        <Button variant="primary" type="submit">
        Submit
        </Button>
        </Form>
        </Container>
      </>
    )
}

export default Forgetpass;