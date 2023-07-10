import { useState } from 'react'
import './App.css'
import  ProductAddToCart  from './components/ItemListContainer';
import Nav from './components/NavBar'
import { Usuario } from './components/Welcome';
import { Flex } from '@chakra-ui/react';

function App() {

  return (
    <>
      <div>
        <Nav/>
        
        <Usuario nombre = "Marco"/> 

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
