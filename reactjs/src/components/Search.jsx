import React from 'react'
import { RightArrow } from './arrowSvg'
import searchImg from '../images/search.png'

const Search = (props) => {
    const [search, setSearch] = React.useState('');

    const {getData} = props;
    const onChange = (e) => {
        setSearch(e.target.value)
        if(e.target.value.length === 0){
      onSearch(null)
    }
    }

    const onSearch = (e) => {
        getData(search)
    }

  return (
    <div>
        <div className='search-container'>
            <img src={searchImg} alt='' className='search-icon'/>
            <input onChange={onChange} placeholder='Buscar localidad...' className='search-input'/>
            <button onClick={onSearch}  className='search-icon-left'>
                <div>
                    <RightArrow/>
                </div>
            </button>
        </div>
    </div>
  )
}

export default Search