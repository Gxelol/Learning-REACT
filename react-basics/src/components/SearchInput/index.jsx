import './styles.css'

export const SearchInput = ({ actionFn, inputValue }) => {
  return (
    <input
      placeholder='Search here'
      className='inp-search'
      type="search"
      onChange={actionFn}
      value={inputValue}
    />
  )
}
