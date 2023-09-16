import { Button, Col, Divider, Form, Input, Layout, Row } from 'antd'
import React, { useState } from 'react'
import "./Common.css"

const AddingTime = () => {
    const [hovers,setHovers]=useState(0);
    const [minutes,setMinutes]=useState(0);
    const [totalHovers,setTotalHovers]=useState(0);
    const [totalMinutes,setTodalMinutes]=useState(0);
    const handleAddingTIme=()=>{
       const total= totalHovers * 60 + totalMinutes + hovers * 60 + minutes;

       // Calculate total hover and total minutes from the total time
       const newTotalHover = Math.floor(total/60);
       const newTotalMinutes=Math.floor(total%60);

       // update the state with the new total time
       setTotalHovers(newTotalHover);
       setTodalMinutes(newTotalMinutes);

       // clear the input field
       setHovers(0);
       setMinutes(0)
    }

    console.log(totalHovers,totalMinutes)
  return (
 <>
   <Layout className="time-layout">


    <h1 className='time-heading'>Time Management</h1>
   <Divider style={{border:"1px solid silver"}}/>
 <Row >
    <Col span={12} col-6 >
    <Form
      layout="vertical"
    >
      <Form.Item label="Enter hover">
      <Input  type='number' value={hovers} onChange={(e)=>setHovers(parseInt((e.target.value),10)||0)} placeholder='Enter hovers only digit or intigir format' size="large"/>
      </Form.Item>
      <Form.Item
        label="Enter minute"
      >
         <Input type='number' value={minutes} onChange={(e)=>setMinutes(parseInt((e.target.value),10)||0)} placeholder='Enter minutes only digit or intigir or number format' size="large" />
      </Form.Item>
      <Divider style={{border:"1px solid silver"}}/>
        <Form.Item>
        <Button type="primary" onClick={handleAddingTIme}>Submit</Button>
      </Form.Item>
       
    </Form>
    <div> Total Hovers {totalHovers}</div>
    <div> Total Minutes {totalMinutes}</div>
    </Col>
    <Col span={12} col-6>
   Subtract
    </Col>
  </Row>


  </Layout>
 </>
  )
}

export default AddingTime