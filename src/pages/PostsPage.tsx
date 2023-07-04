import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchValue, setSelectedAuthor, setCurrentPage } from "../redux/slice/FilterSlice";
import { SearchLayout } from '../layouts/SearchLayout'
import { UserFilterLayout } from '../layouts/UserFilterLayout'
import { SortPostLayout } from '../layouts/SortPostLayout'
import { PostItemListLayout } from '../layouts/PostItemListLayout'
import { PostItemGridLayout } from '../layouts/PostItemGridLayout'
import { PaginationComponent } from '../components/PaginationComponent'
import '../scss/Posts.scss'
import { fetchPosts } from "../redux/slice/PostsSlice";

export const PostsPage = () => {
  const dispatch = useDispatch()
  // @ts-ignore
  const itemsPosts = useSelector(state => state.posts.items)
  // @ts-ignore
  const itemsPostsStatus = useSelector(state => state.posts.status)
  // @ts-ignore
  const itemCount = useSelector(state => state.posts.itemsCount)
  // @ts-ignore
  const { searchValue, selectedAuthor, sort, currentPage } = useSelector(state => state.filter)

  const onChangeAuthor = (id) => { dispatch(setSelectedAuthor(id)) }
  const onChangePage = number => { dispatch(setCurrentPage(number)) }

  const getPosts = async () => {

    const search = searchValue ? `&q=${searchValue}` : ''
    const filtersAuthor = selectedAuthor > 0 ? `&userId=${selectedAuthor}`: ''
    const sortBy = sort.sortProperty.replace('-','')
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'

    // @ts-ignore
    dispatch(fetchPosts({
      currentPage,
      filtersAuthor,
      sortBy,
      order,
      search,
      }),
    );

    window.scrollTo(0, 0);
  }

  React.useEffect(() => {
    getPosts()
  }, [searchValue, selectedAuthor, sort.sortProperty, currentPage])

  const posts = itemsPosts.map( obj => <PostItemGridLayout key={obj.id} { ...obj } /> )

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
      { itemsPostsStatus === 'error' ? (
        <div className="row justify-content-center">
          <div className="col-md-auto px-3 py-5">
            <h2> Something went wrong!</h2>
          </div>
        </div>
      ) : (
        <div className="row">
          {posts}
          <PaginationComponent onChangePage={onChangePage} itemsCount={itemCount} />
        </div>
      )}
    </div>
  )
}
