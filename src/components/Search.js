import React from 'react'
import { FaSearch } from 'react-icons/fa'
import '../styles/Search.scss'


function Search() {
  return (
    <div className='search'>
      <form className="search_box">
        <fieldset className="search_inner">
            <legend className="blind">검색창</legend>
            <FaSearch className='ico'/>
            <input type="search" name="search" id="search"
            placeholder="Find friends, chats, Plus Friends" />
        </fieldset>
    </form>
    </div>
  )
}

export default Search