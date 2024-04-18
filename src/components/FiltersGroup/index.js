import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    updateSearchValue,
    updateActiveCategory,
    updateActiveRating,
    activeCategoryId,
    activeRatingId,
    clearFilters,
    enterSearch,
  } = props
  const onclickUpdateCategoryItem = categoryId => {
    updateActiveCategory(categoryId)
  }
  const onclickUpdateRatingsItem = ratingId => {
    updateActiveRating(ratingId)
  }
  const onClickUpdateClearFilters = () => {
    clearFilters()
  }
  const categoryName = eachCategory => {
    const {name, categoryId} = eachCategory
    const activeClass = activeCategoryId === categoryId ? 'active' : ''
    return (
      <li
        onClick={() => onclickUpdateCategoryItem(categoryId)}
        key={categoryId}
      >
        <p className={`catergory ${activeClass}`}>{name}</p>
      </li>
    )
  }
  const onchangeUpdateSearchValue = event => {
    updateSearchValue(event.target.value)
  }
  const ratingImg = eachRating => {
    const {imageUrl, ratingId} = eachRating
    const activeClass = ratingId === activeRatingId ? 'active' : ''
    return (
      <li
        className="rating-list-item"
        onClick={() => onclickUpdateRatingsItem(ratingId)}
      >
        <img className="rating-img" src={imageUrl} alt={`rating ${ratingId}`} />
        <p className={`rating-up ${activeClass}`}>&up</p>
      </li>
    )
  }
  const onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      enterSearch()
    }
  }
  return (
    <div className="filters-group-container">
      <div className="search">
        <input
          className="search-bar"
          type="search"
          placeholder="Search"
          onChange={onchangeUpdateSearchValue}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
      <ul className="list">
        <h1 className="list-title">Category</h1>
        {categoryOptions.map(eachCategory => categoryName(eachCategory))}
      </ul>
      <ul className="list">
        <h1 className="list-title">Rating</h1>
        {ratingsList.map(eachRating => ratingImg(eachRating))}
      </ul>
      <button className="clear-btn" onClick={onClickUpdateClearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
