import React from 'react';
import styled from "styled-components";
import Section from './Section';

function Home() {
  return (
      <Container>
          <Section 
          title="Model S"
          description="order Online for Touchless Delivery" 
          backgroundImg="model-s.jpg"
          leftBthText="Custom Order"
          rightBthText="Existing inventory" />
          
          <Section  title="Model Y"
          description="order Online for Touchless Delivery" 
          backgroundImg="model-y.jpg"
          leftBthText="Custom Order"
          rightBthText="Existing inventory"/>

          <Section
           title="Model 3"
           description="order Online for Touchless Delivery" 
           backgroundImg="model-3.jpg"
           leftBthText="Custom Order"
           rightBthText="Existing inventory" />


          <Section 
           title="Model X"
           description="order Online for Touchless Delivery" 
           backgroundImg="model-x.jpg"
           leftBthText="Custom Order"
           rightBthText="Existing inventory"/>

           <Section
             title="Lowest cost solar panels in america"
             description="Money back guarantee" 
             backgroundImg="solar-panel.jpg"
             leftBthText="Custom Order"
             rightBthText="Existing inventory" />

             <Section 
               title="Solar for New Roofs"
               description="order Online for Touchless Delivery" 
               backgroundImg="solar-roof.jpg"
               leftBthText="Custom Order"
               rightBthText="Existing inventory"/>

               <Section 
                 title="Accessories"
                
                 backgroundImg="accessories.jpg"
                 leftBthText="Custom Order"
                 rightBthText="Existing inventory"/>

          

      </Container>
  )
}

export default Home;

const Container =styled.div`
height:100vh;
`
