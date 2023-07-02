import React from 'react'
import { useNavigate } from 'react-router-dom'
import qs from 'qs'
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
import { setSelectedAuthor, setCurrentPage, setFilters } from "../redux/slice/FilterSlice";

import { SearchLayout } from '../layouts/SearchLayout'
import { UserFilterLayout } from '../layouts/UserFilterLayout'
import { sortList, SortPostLayout } from '../layouts/SortPostLayout'

import { PostItemListLayout } from '../layouts/PostItemListLayout'
import { PostItemGridLayout } from '../layouts/PostItemGridLayout'

import { PaginationComponent } from '../components/PaginationComponent'

import '../scss/Posts.scss'

export const PostsPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isSearch = React.useRef(false)
  const isMotend = React.useRef(false)
  // @ts-ignore
  const { selectedAuthor, sort, currentPage } = useSelector(state => state.filter)
  const onChangeAuthor = (id) => {
    dispatch(setSelectedAuthor(id))
  }
  const onChangePage = number => {
    dispatch(setCurrentPage(number))
  }
  const [searchValue, setSearchValue] = React.useState('')
  const [itemsPosts, setItemsPosts] = React.useState([])
  const posts = itemsPosts.map( obj => <PostItemGridLayout key={obj.id} { ...obj } /> )

  const fetchPosts = () => {

    const search = searchValue ? `&q=${searchValue}` : ''
    const filtersAuthor = selectedAuthor > 0 ? `&userId=${selectedAuthor}`: ''
    const sortBy = sort.sortProperty.replace('-','')
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'

    React.useEffect(() => {
      axios.get(`http://localhost:4301/posts?_limit=8&_page=${currentPage}${filtersAuthor}&_sort=${sortBy}&_order=${order}${search}`)
      .then(resolve => {
          setItemsPosts(resolve.data)
        }
      )
    }, [searchValue, selectedAuthor, sort.sortProperty, currentPage])
  }

  React.useEffect(()=> {
    if (window.location.search) {
      const params =qs.params(window.location.search.substring(1))
      const sort = sortList.find(obj => obj.sortProperty === params.sortProperty)
      dispatch(
        setFilters ({
          ...params,
          sort
        }),
      )
      isSearch.current = true
    }
  },[])

  React.useEffect(() => {
    window.scrollTo(0,0)
    if (!isSearch.current) {
      fetchPosts()
    }
    isSearch.current = false
  }, [searchValue, selectedAuthor, sort.sortProperty, currentPage])

  React.useEffect(()=>{
    if (isMotend.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        selectedAuthor,
        currentPage,
      })
      navigate(`?${queryString}`)
    }
    isMotend.current = true
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
