import React from 'react'
import './Experiences.css'
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


const Experiences = () => {
  return (
    <div>
         <section class="experiences">
             <h2>EXPERIENCES : </h2>
                <div class="line"></div>
                <ul>
                    <li id='listOf'>Front End Development , Magento Internship
                        <ul class="company"><li>Yafa Technologies <span id="date">11/2023 - 01/2024</span></li></ul>
                    </li>
                    <li id='listOf'>Consultant SAP Internship
                        <ul class="company"><li>ISMONTIC <span id="date">10/2023 - 11/2024</span></li></ul>
                    </li>
                    <li id='listOf'>French Tutor
                        <ul class="company"><li>ELM STUDY <span id="date">2021 - Present</span></li></ul>
                    </li>
                </ul>
            </section>
    </div>
  )
}

export default Experiences