import { useState } from 'react'
import './App.css'
import  ProductAddToCart  from './components/CardProduct';
import Nav from './components/Header'
import { Flex } from '@chakra-ui/react';

function App() {

  return (
    <>
      <div>
        <Nav/>
        
        <Flex direction="row" wrap="wrap" justifyContent="space-around">
          <ProductAddToCart/>
          <ProductAddToCart/>
          <ProductAddToCart/>
        </Flex>
      </div>
    </>
  )
}

export default App
