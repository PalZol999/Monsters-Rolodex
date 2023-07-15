
import React from 'react';
import { useState, useEffect, ChangeEvent } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box-component';
import {getData} from './utils/data.utils'
import './App.css';

export type Monster = {
  id: string
  name: string
  email: string
}

const App = () => {
  const [searchField, setSearchField] = useState("") // [1st value, is the value that we want to store, the 2sd setValue function]
  const [monsters, setMonsters] = useState<Monster[]>([])
  const [filterdMonsters, setFilterMonsters] = useState(monsters)

  useEffect(()=> {  
  const fetchUser = async () => {
    const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users')
    setMonsters(users)
  }
  fetchUser()
},[])

  useEffect(()=> {  
    const newFilterdMonsters= monsters.filter((monster)=> {
    return monster.name.toLocaleLowerCase().includes(searchField)  
  })
  setFilterMonsters(newFilterdMonsters)
  }, [monsters,searchField])

  const onSearchChange =(event: ChangeEvent<HTMLInputElement>): void=> {
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
