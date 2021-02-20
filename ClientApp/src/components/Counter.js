import React from 'react';
import { Alert, Jumbotron, Badge } from 'react-bootstrap'


const Counter = props => (
  <div style={{marginTop:"4em"}}>
    <Alert key={1} variant="info">
      <h3>Sofware Enginner</h3>
      <p>
        A Software Engineer graduate who is seeking to find the opportunity to work in a fun and challenging
        work environment that will encourage me to improve and learn new necessary skills in the software
        engineering industry.
      </p>
    </Alert>
    <Jumbotron>
      <div>
        <h3>Skills</h3>
        <Badge variant="secondary">Core Java</Badge> <Badge>C</Badge> <Badge>C++</Badge> <Badge>SQL</Badge> <Badge>MS Office</Badge>
      </div>
      <div>
        <h3>Intrests</h3>
        <Badge>Programming</Badge> <Badge>Graphic Designing</Badge> <Badge>Web Development</Badge> <Badge>Reading</Badge> <Badge>Writing</Badge>
      </div>
    </Jumbotron>
    <Jumbotron>
      <h2>Education</h2>
      <div>
        <h3>B.Tech</h3>
        <p>Dr. A P J Abdul Kalam Women's Institute of Technology</p> <span>2015-19</span> <span>7.85 CGPA</span>
      </div>
      <div>
        <h3>Heigher Secondary </h3>
        <p>R L College, BSEB</p> <span>2013-15</span> <span>64%</span>
      </div>
      <div>
        <h3>Secondary</h3>
        <p>R L College, BSEB</p> <span>2012</span> <span>69.9%</span>
      </div>
    </Jumbotron>
    <Jumbotron>
        <h3>Projects and Trainings</h3>
        <div>
          <p>Online Examination System System</p>
          <ul>
            <li>The Project was based to provide the insight of the functionality and behavior of the Online Examination
            System. </li>
            <li>My Responsibilities include designing of E R diagram, table, role based Menu, student Information,About
              question Papers pages, Registration pages and many more. </li>
            <li>
              Technology: Core Java 
            </li>
            <li>
            Development Tools: NetBeans 
            </li>
            <li>
            Database: MS Access
            </li>
          </ul>
        </div>
        <br></br>
        <div>
          <p>Mini Project on School Management System</p>
          <div>successfully completed Industrial training with WebTek PVT Ltd (06/2018 - 07/2018)</div>
        </div>
        <br></br>
        <div><p>Course in C language from NIIT</p></div>
        <div><p>Course in core java from MICROBIT Institute</p></div>
    </Jumbotron>
  </div>
);

export default Counter;
