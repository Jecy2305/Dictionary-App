import React from 'react'
import SearchBar from './SearchBar'
import Word from './Word'
import { useFetchDictionary } from '../Hooks/useFetchDictionary'

function Dictionary() {

  const {response, fetchData} = useFetchDictionary();
  console.log(response)

  return (
    <main>
        <SearchBar onSearch={fetchData}/>
        <Word response={response}/>
    </main>
  )
}

export default Dictionary