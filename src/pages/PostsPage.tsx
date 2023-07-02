import React, {useState} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setUserId } from "../redux/slice/FilterSlice";

import { SearchLayout } from '../layouts/SearchLayout'
import { UserFilterLayout } from '../layouts/UserFilterLayout'
import { SortPostLayout } from '../layouts/SortPostLayout'

import { PostItemLayout } from '../layouts/PostItemLayout'
import { PaginationComponent } from '../components/PaginationComponent'

import '../scss/Posts.scss'

export const PostsPage = () => {

  // const dispatch = useDispatch()
  // // @ts-ignore
  // const userId = useSelector(state => state.FilterSlice.userId)
  //
  // const onChangeUser = (id) => {
  //   console.log(setUserId(id))
  // }

  const [searchValue, setSearchValue] = React.useState('')
  const [itemsPosts, setItemsPosts] = React.useState([])
  const [selectedAuthor, setSelectedAuthor] = useState(0)
  const [sortContent, setSortContent] = useState({
    name: 'Sort title asc',
    sort:'title',
    order: 'asc'
  })
  const [paginationPage, setPaginationPage] = React.useState(0)
  const search = searchValue ? `&q=${searchValue}` : ''
  const filtersAuthor = selectedAuthor > 0 ? `&userId=${selectedAuthor}`: ''
  const sortBy = sortContent.sort
  const sortOrder = sortContent.order

  React.useEffect(() => {
    fetch(`http://localhost:4301/posts?_limit=8&_page=${paginationPage}${filtersAuthor}&_sort=${sortBy}&_order=${sortOrder}${search}`)
    .then((response) => { return response.json() })
    .then((json) => {
      setTimeout(() => {
        setItemsPosts(json)
      },10)
    })
  }, [selectedAuthor, sortContent, paginationPage, searchValue])

  const posts = itemsPosts.map( obj => <PostItemLayout key={obj.id} { ...obj } /> )

  return (
    <div className="container-fluid container-xxl">
      <h1 className="mb-4">Posts Page</h1>
      <div className="filter-content">
        <div className="row mb-4">
          <div className="col-12 col-md-auto me-md-auto mb-3 mb-md-0">
            <SearchLayout searchValue={searchValue} setSearchValue={setSearchValue}/>
          </div>
          <div className="col-12 col-md-auto mb-3 mb-md-0">
            <UserFilterLayout value={selectedAuthor} onChangeAuthor={(id) => setSelectedAuthor(id)}/>
          </div>
          <div className="col-12 col-md-auto mb-3 mb-md-0">
            <SortPostLayout value={sortContent} onChangeSort={(sort) => setSortContent(sort)}/>
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
