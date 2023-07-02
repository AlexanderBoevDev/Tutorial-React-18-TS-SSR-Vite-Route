import React from 'react'
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
import { setSelectedAuthor, setCurrentPage } from "../redux/slice/FilterSlice";

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
  const { selectedAuthor, sort, currentPage } = useSelector(state => state.filter)
  const onChangeAuthor = (id) => {
    dispatch(setSelectedAuthor(id))
  }
  const onChangePage = number => {
    dispatch(setCurrentPage(number))
  }
  const [searchValue, setSearchValue] = React.useState('')
  const sortBy = sort.sortProperty.replace('-','')
  const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
  const [itemsPosts, setItemsPosts] = React.useState([])
  const posts = itemsPosts.map( obj => <PostItemGridLayout key={obj.id} { ...obj } /> )
  const search = searchValue ? `&q=${searchValue}` : ''
  const filtersAuthor = selectedAuthor > 0 ? `&userId=${selectedAuthor}`: ''

  React.useEffect(() => {
    axios.get(`http://localhost:4301/posts?_limit=8&_page=${currentPage}${filtersAuthor}&_sort=${sortBy}&_order=${order}${search}`)
      .then(resolve => {
        // setTimeout(() => {
        //   setItemsPosts(resolve.data)
        // },1500)
        setItemsPosts(resolve.data)
      }
    )
    window.scrollTo(0,0)
  }, [searchValue, selectedAuthor, sort.sortProperty, currentPage])

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
        <PaginationComponent currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </div>
  )
}
