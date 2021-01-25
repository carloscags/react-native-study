import React from 'react'
// import App from './App';
import Primeiro from './components/basic/primeiro'
import ComParamentros from './components/basic/ComParamentro'
// import primeiro from './components/primeiro';
import FunctionExemplo from './components/basic/function'

import ComFilhos from './components/basic/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basic/Repetition'
import Condicional from './components/basic/condicional'
import Add from './components/basic/add'


export default (props) =>
  <div>
      <Card title="Component Children">
        <Repeticao />
        <Condicional numero={1} />       
      </Card>
      <Card>
      <ComFilhos>
              <ul>
                <li>Carlos</li>
                <li>Afonso</li>
                <li>Viviane</li>
                <li>Daniel</li>
              </ul>
          </ComFilhos> 
      </Card>
      <Card title="Component Card+{Interpolation}+ComParamentros">
        <ComParamentros title="using iterpolation => {}" subtitle='using iterpolation => {}'/>
      </Card>
      <Card title="Exemplo function/function anonymous">    
        <Primeiro />
        <FunctionExemplo />
      </Card>
      <Card title="Props">
        <ComParamentros title="using more than one parameter with different values" subtitle='using props'/>
      </Card>
      <Card title="Type addition">
        <Add  value1={4} value2={2} />
      </Card>
  </div>