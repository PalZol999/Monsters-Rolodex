import React from 'react'
import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box-component';
import './App.css';


const App = () => {

  const [searchField, setSearchField] = useState("") // [1st value, is the value that we want to store, the 2sd setValue function]
  const [monsters, setMonsters] = useState([])
  const [filterdMonsters, setFilterMonsters] = useState(monsters)

  useEffect(()=> {  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=> response.json())
  .then ((users)=> setMonsters(users))}, [])

  useEffect(()=> {  
    const newFilterdMonsters= monsters.filter((monster)=> {
    return monster.name.toLocaleLowerCase().includes(searchField)  
  })
  setFilterMonsters(newFilterdMonsters)
  }, [monsters,searchField])

  const onSearchChange =(event)=> {
    const searchFieldString =event.target.value.toLocaleLowerCase() //58.video re! 
    setSearchField(searchFieldString)
    }

   return  <div className="App">
    <h1 className='app-title'>Monsters Roldex</h1>
  

   <SearchBox 
   onChangeHandler={onSearchChange} 
   placeholder='search monster' 
   className='monsters-search-box'/>

   
   <CardList monsters={filterdMonsters}/>
   
    </div>
  ;
  } 

export default App;
