import { Input } from "antd"
import './Search.scss'
const { Search } = Input

export default function SearchComponent() {
  function search() {
    console.log('search')
  }
  return (
    <div className='search'>
      <Search
        className='search__input'
        placeholder="Busca algo delicioso"
        allowClear
        enterButton="Buscar"
        size="large"
        onSearch={search}
      />
    </div>
  )
}
