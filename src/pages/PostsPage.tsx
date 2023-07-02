import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setSelectedAuthor } from "../redux/slice/FilterSlice";

import { SearchLayout } from '../layouts/SearchLayout'
import { UserFilterLayout } from '../layouts/UserFilterLayout'
import { SortPostLayout } from '../layouts/SortPostLayout'

import { PostItemListLayout } from '../layouts/PostItemListLayout'
import { PostItemGridLayout } from '../layouts/PostItemGridLayout'

import { PaginationComponent } from '../components/PaginationComponent'

import '../scss/Posts.scss'

export const PostsPage = () => {

  const dispatch = useDispatch()
  // @ts-ignore
  const {selectedAuthor, sort} = useSelector(state => state.filter)
  const onChangeAuthor = (id) => {
    dispatch(setSelectedAuthor(id))
  }
  const [searchValue, setSearchValue] = React.useState('')
  const sortBy = sort.sortProperty.replace('-','')
  const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
  const [paginationPage, setPaginationPage] = React.useState(0)
  const [itemsPosts, setItemsPosts] = React.useState([])
  const posts = itemsPosts.map( obj => <PostItemGridLayout key={obj.id} { ...obj } /> )
  // const postsList = itemsPosts.map( obj => <PostItemListLayout key={obj.id} { ...obj } /> )
  // const postsGrid = itemsPosts.map( obj => <PostItemGridLayout key={obj.id} { ...obj } /> )
  const search = searchValue ? `&q=${searchValue}` : ''
  const filtersAuthor = selectedAuthor > 0 ? `&userId=${selectedAuthor}`: ''

  React.useEffect(() => {
    fetch(`http://localhost:4301/posts?_limit=8&_page=${paginationPage}${filtersAuthor}&_sort=${sortBy}&_order=${order}${search}`)
    .then((response) => { return response.json() })
    .then((json) => {
      setTimeout(() => {
        setItemsPosts(json)
      },10)
    })
  }, [searchValue, selectedAuthor, sort.sortProperty, paginationPage])

  return (
    <div className="container-fluid container-xxl">
      <h1 className="mb-4">Posts Page</h1>
      <div className="filter-content">
        <div className="row mb-4">
          <div className="col-12 col-md-auto me-md-auto mb-3 mb-md-0">
            <SearchLayout searchValue={searchValue} setSearchValue={setSearchValue}/>
          </div>
          <div className="col-12 col-md-auto mb-3 mb-md-0">
            <UserFilterLayout value={selectedAuthor} onChangeAuthor={onChangeAuthor}/>
          </div>
          <div className="col-12 col-md-auto mb-3 mb-md-0">
            <SortPostLayout/>
          </div>
        </div>
      </div>
      <div className="row">
        { posts }
      </div>
      <div className="row">
        <PaginationComponent onChangePage={(number) => setPaginationPage(number)} />
      </div>
    </div>
  )
}
