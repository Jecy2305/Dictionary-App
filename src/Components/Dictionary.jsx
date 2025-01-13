import React from 'react'
import SearchBar from './SearchBar'
import Word from './Word'
import { useFetchDictionary } from '../Hooks/useFetchDictionary'

function Dictionary() {

  const {data} = useFetchDictionary();
  console.log(data)

  return (
    <main>
        <SearchBar/>
        <Word data={data}/>
    </main>
  )
}

export default Dictionary