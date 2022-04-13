import React from 'react'
import { RightArrow } from './arrowSvg'
import searchImg from '../images/search.png'

const Search = (props) => {
    const [search, setSearch] = React.useState('');

    const {getData} = props;



    const onSearch = (e) => {
        e.preventDefault()

        if(!search.trim()){
            console.log('vacio')
            return
          }

        getData(search)
       
    }

  return (
    <div>
        <div className='search-container'>
            <img src={searchImg} alt='' className='search-icon'/>
            <input 
            onChange={e => setSearch(e.target.value)} 
            placeholder='Buscar localidad...' 
            className='input search-input'
            value={search}/>
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