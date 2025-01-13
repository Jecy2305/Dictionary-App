import search from '../assets/images/icon-search.svg'

function SearchBar() {
  return (
    <form>
        <label>
            <input type="text"/>
            <img src={search} alt="search"/>
        </label>
    </form>
  )
}

export default SearchBar