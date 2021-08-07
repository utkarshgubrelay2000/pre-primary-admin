import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Home.css";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import { allPreOrders, fetchClasses } from "../../Api";
import { useHistory } from 'react-router-dom'
import { Table } from "react-bootstrap";
import moment from 'moment'
export default function Home() {
  const [isUser,setIsUser]=useState(true)
  const [orders,setorders]=useState([])
  
  let history = useHistory()

  useEffect(() => {
    getAllOrders()
  }, []);
  const getAllOrders=async()=>{
let res=await allPreOrders()
console.log(res)
setorders(res.data)
  }
  return (
    <Layout>
      <div className='container text-center'>
        
        <h2 className="mt-3">Pre Primary Bookings</h2>

        
      <div id="page" className="section mt-5 " style={{minHeight:'300px'}}>
      <Table striped bordered hover responsive >
  <thead>
    <tr>
      <th>Sno.</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>amount</th>
      <th>Class</th>
      <th>Address</th>
      <th>PinCode</th>
     
      <th>Date</th>
      <th>APTRANSACTIONID</th>
    
    </tr>
  </thead>
  <tbody>
    {orders.map((item,index)=>{
      return(
    <tr>
      <td>{index+1}</td>
      <td>{item.fname} {item.lname}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.totalAmount}</td>
      <td>{item.className}</td>
      <td>{item.userAddress} , {item.userTown},{item.state}</td>
      <td> {item.pinCode} </td>
      <td>
     { moment(item.updatedAt).format('MMMM Do YYYY')}
      </td>
      <td>{item.APTRANSACTIONID}</td>
    </tr>
   )
    })}</tbody>
</Table>
      </div>

 </div>
    </Layout>
  )
}