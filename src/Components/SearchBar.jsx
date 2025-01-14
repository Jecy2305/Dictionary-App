import { useState } from 'react'
import search from '../assets/images/icon-search.svg'

function SearchBar() {

  const [searchValue, setSearchValue] = useState("");
  

  const handleSubmit = (e)=>{
    e.preventDefault();
    setSearchValue("");
  }

  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
        <label>
            <input type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            />
            <img src={search} alt="search"/>
        </label>
    </form>
  )
}

export default SearchBar