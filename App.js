import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Botao from './src/components/botao'
import Display from './src/components/display'

export default function App() {
  const [valores, setValores] = useState([])  
  const [valorDisplay, setvalorDisplay] = useState('0')
  const [refresh, setRefresh]= useState(true)
  const [novoDigito, setNovoDigito] = useState(false)
  const [operacao, setOperacao] = useState()
  const addDigito = (digito) =>{
    setNovoDigito(true)
    setvalorDisplay(refresh?digito:`${valorDisplay}${digito}`)
    setRefresh(false)
  }
  const addOperacao = (operacao)=>{
    
    
    setRefresh(true)
    const atualizado = valores
    if(novoDigito){ 
      atualizado.push(parseFloat(valorDisplay))
      setValores(atualizado)
      if(valores.length === 2){
        resultado() 
      }
      setOperacao(operacao)
       
    }
    setNovoDigito(false)  
    console.warn(valores)
    
  }
  const resultado = ()=>{
    console.warn(operacao)
    switch (operacao){
      case '+': console.warn(valores[0]+valores[1])
      case 'x': console.warn(valores[0]*valores[1])
      case '-': console.warn(valores[0]-valores[1])
      case '/': console.warn(valores[0]/valores[1])
    }
  }
  return (
    <View style={styles.container}>
      <Display valor={valorDisplay}/>
      <View style={styles.botoes}>
        <Botao valor='%' />
        <Botao valor='CE' />
        <Botao valor='C' />
        <Botao valor='Apaga' />
        <Botao valor='1/x' />
        <Botao valor='x²' />
        <Botao valor='sqrt' />
        <Botao valor='/' onClick={()=>addOperacao('/')}/>
        <Botao valor='7' bg="#D0D3DC" onClick={()=>addDigito(7)} />
        <Botao valor='8' bg="#D0D3DC" onClick={()=>addDigito(8)} />
        <Botao valor='9' bg="#D0D3DC" onClick={()=>addDigito(9)} />
        <Botao valor='X' onClick={()=>addOperacao('x')}/>
        <Botao valor='4' bg="#D0D3DC" onClick={()=>addDigito(4)} />
        <Botao valor='5' bg="#D0D3DC" onClick={()=>addDigito(5)} />
        <Botao valor='6' bg="#D0D3DC" onClick={()=>addDigito(6)} />
        <Botao valor='-' onClick={()=>addOperacao('-')} />
        <Botao valor='1' bg="#D0D3DC" onClick={()=>addDigito(1)} />
        <Botao valor='2' bg="#D0D3DC" onClick={()=>addDigito(2)} />
        <Botao valor='3' bg="#D0D3DC" onClick={()=>addDigito(3)} />
        <Botao valor='+' onClick={()=>addOperacao('+')}/>
        <Botao valor='+/-'bg="#D0D3DC" />
        <Botao valor='0' bg="#D0D3DC" onClick={()=>addDigito(0)} />
        <Botao valor=',' bg="#D0D3DC" />
        <Botao valor='=' bg="#AACDE9"/>

      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botoes:{
    flexDirection:"row",
    flexWrap:"wrap"
  }
});
