import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FaBackspace } from 'react-icons/fa';

import './Calculator.css';

function Calculator() {
    let [digiteCharacter,setDigiteCharacter]=useState('0');
    let [secondDigiteCharacter,setSecondDigiteCharacter]=useState('0');
    let [resultNumeric,setResultNumeric]=useState(0)
    let [operation,setOperation]=useState('');
    let [dot,setDot]=useState(0);
    

    function handleDigite(x){
        if(operation==='='){
            setResultNumeric(0)
        } 
        if(digiteCharacter==='0'){
            //only for when press 0 for the first time
            if(x==='.' && dot<1){
                setDigiteCharacter((value)=>value+x)
                setDot(1)
                console.log(dot)
            }
            else if(x!=='.'){
                setDigiteCharacter(x)
            }     
        }
        else if(digiteCharacter!=='0' & digiteCharacter.length<12){   
            if(x==='.' && dot<1){
                setDigiteCharacter((value)=>value+x)
                setDot(1)
                console.log(dot)
            }
            else if(x!=='.'){
                setDigiteCharacter((value)=>value+x)
            }
        }       
    }

    function handleOperation(x){
        if(x==='+'||x==='-'||x==='*'||x==='/'){
            setOperation(x)
            setDot(0)
        } 
               
        if(digiteCharacter!=='0'){
            setSecondDigiteCharacter(digiteCharacter)
            setDigiteCharacter("0")
        }
        
        if(operation==='+'){
            if(resultNumeric===0){
                setResultNumeric(parseFloat(secondDigiteCharacter)+parseFloat(digiteCharacter)) 
            }
            else{
                setResultNumeric((previousValue)=>previousValue+parseFloat(digiteCharacter))
            }   
                
        }
        else if(operation==='-'){
            if(resultNumeric===0){
                setResultNumeric(parseFloat(secondDigiteCharacter)-parseFloat(digiteCharacter)) 
            }else{
                setResultNumeric((previousValue)=>previousValue-parseFloat(digiteCharacter))
                }
        }
        else if(operation==='*'){
            if(resultNumeric===0){
                setResultNumeric(parseFloat(secondDigiteCharacter)*parseFloat(digiteCharacter))                  
            }else{
                setResultNumeric((previousValue)=>previousValue*parseFloat(digiteCharacter))
            }
        }
        else if(operation==='/'){
            if(resultNumeric===0){
                setResultNumeric(parseFloat(secondDigiteCharacter)/parseFloat(digiteCharacter))
            }else{
                setResultNumeric((previousValue)=>previousValue/parseFloat(digiteCharacter))
            }
        }
    }

    function handleEquall(x){        
            if(operation==='+'){
                if(resultNumeric===0){
                    setResultNumeric(parseFloat(secondDigiteCharacter)+parseFloat(digiteCharacter)) 
                }
                else{
                    setResultNumeric((previousValue)=>previousValue+parseFloat(digiteCharacter))
                }
            }
            else if(operation==='-'){
                if(resultNumeric===0){
                    setResultNumeric(parseFloat(secondDigiteCharacter)-parseFloat(digiteCharacter)) 
                }else{
                    setResultNumeric((previousValue)=>previousValue-parseFloat(digiteCharacter))
                }
            }
            else if(operation==='*'){
                if(resultNumeric===0){
                    setResultNumeric(parseFloat(secondDigiteCharacter)*parseFloat(digiteCharacter))                  
                }else{
                    setResultNumeric((previousValue)=>previousValue*parseFloat(digiteCharacter))
                }
            }
            else if(operation==='/'){
                if(resultNumeric===0){
                    setResultNumeric(parseFloat(secondDigiteCharacter)/parseFloat(digiteCharacter))
                }else{
                    setResultNumeric((previousValue)=>previousValue/parseFloat(digiteCharacter))
                }
            }
            
            setDigiteCharacter("0")
            setSecondDigiteCharacter('0') 
            
            if(x==='='){
                setOperation(x)
            }
    }

    function handleClearAnddelete(x){
        if(x==='C'){
            setDigiteCharacter('0')
            setResultNumeric(0)
            setSecondDigiteCharacter('0')
            setOperation('')
            setDot(0)
        }
        else if(x==='delete'){
            let xyz=digiteCharacter.substring(0, digiteCharacter.length - 1)
            setDigiteCharacter(xyz)
            if(xyz===''){
                setDigiteCharacter('0')
            }
        } 
    }
    
  return (
    <>
        <div className='container-fluid'>
            <div className='calculator'>
                <div className='row display-row'>
                    <div className='col-sm-12'>
                        <div className='display'>
                            <div className='row'>
                                <div className='display_row_1'>
                                    <p>{(resultNumeric===0)?(digiteCharacter==='0')?(secondDigiteCharacter!=='0')?secondDigiteCharacter:'0':(secondDigiteCharacter!=="0")?secondDigiteCharacter:digiteCharacter:resultNumeric}{(operation==='=')?'':operation}{(digiteCharacter!=='0')?(operation==='+'||operation==='-'||operation==='*'||operation==='/')?digiteCharacter:'':''}{(operation==='=')?(digiteCharacter==='0')?(resultNumeric!==0)?'=':'':'':''}</p>                               
                                </div> 
                            </div>
                            <div className='row'>
                                <div className='display_row_2'>
                                    <h1>{digiteCharacter}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row button-row'>
                    <div className='col-sm'>
                        <div className='button'>
                            <Button className='btn special-btn' onClick={()=>handleClearAnddelete("C")}>C</Button>
                        </div>
                    </div>
                    <div className='col-sm'>
                        <div className='button'>
                            <Button className='btn special-btn' onClick={()=>handleClearAnddelete("delete")}><FaBackspace /></Button>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='button'>
                            <Button className='btn ssmd-btn' onClick={()=>handleOperation("+")}>+</Button>
                        </div>
                    </div>
                </div>
                <div className='row button-row'>
                    <div className='col-sm-3'>
                        <div className='button'>
                            <Button className='btn' onClick={()=>handleDigite("1")}>1</Button>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='button'>
                            <Button className='btn' onClick={()=>handleDigite("2")}>2</Button>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='button'>
                            <Button className='btn' onClick={()=>handleDigite("3")}>3</Button>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='button'>
                            <Button className='btn ssmd-btn' onClick={()=>handleOperation("-")}>-</Button>
                        </div>
                    </div>
                </div>
                <div className='row button-row'>
                    <div className='col-sm-3'>
                        <div className='button'>
                            <Button className='btn' onClick={()=>handleDigite("4")}>4</Button>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='button'>
                            <Button className='btn' onClick={()=>handleDigite("5")}>5</Button>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='button'>
                            <Button className='btn' onClick={()=>handleDigite("6")}>6</Button>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='button'>
                            <Button className='btn ssmd-btn' onClick={()=>handleOperation("*")}>x</Button>
                        </div>
                    </div>
                </div>
                <div className='row button-row'>
                    <div className='col-sm-3'>
                        <div className='button'>
                            <Button className='btn' onClick={()=>handleDigite("7")}>7</Button>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='button'>
                            <Button className='btn' onClick={()=>handleDigite("8")}>8</Button>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='button'>
                            <Button className='btn' onClick={()=>handleDigite("9")}>9</Button>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='button'>
                            <Button className='btn ssmd-btn' onClick={()=>handleOperation("/")}>/</Button>
                        </div>
                    </div>
                </div>
                <div className='row button-row'>
                    <div className='col-sm-3'>
                        <div className='button'>
                            <Button className='btn' onClick={()=>handleDigite("0")}>0</Button>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='button'>
                            <Button className='btn' onClick={()=>handleDigite(".")}>.</Button>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='button'>
                            <Button className='btn special-btn'onClick={()=>handleEquall("=")}>=</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Calculator


