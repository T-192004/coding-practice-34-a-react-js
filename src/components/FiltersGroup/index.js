import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    updateSearchValue,
    updateActiveCategory,
    updateActiveRating,
  } = props
  const onclickUpdateCategoryItem = categoryId => {
    updateActiveCategory(categoryId)
  }
  const onclickUpdateRatingsItem = ratingId => {
    updateActiveRating(ratingId)
  }
  const categoryName = eachCategory => {
    const {name, categoryId} = eachCategory
    return (
      <li onClick={onclickUpdateCategoryItem(categoryId)} key={categoryId}>
        <p className="catergory">{name}</p>
      </li>
    )
  }
  const onchangeUpdateSearchValue = event => {
    updateSearchValue(event.target.value)
  }
  const ratingImg = eachRating => {
    const {imageUrl, ratingId} = eachRating
    return (
      <li
        className="rating-list-item"
        onClick={onclickUpdateRatingsItem(ratingId)}
      >
        <img className="rating-img" src={imageUrl} alt="stars" />
        <p className="rating-up">&up</p>
      </li>
    )
  }
  return (
    <div className="filters-group-container">
      <div className="search">
        <input
          className="search-bar"
          type="search"
          placeholder="Search"
          onChange={onchangeUpdateSearchValue}
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
      <button className="clear-btn">Clear Filters</button>
    </div>
  )
}

export default FiltersGroup
