import React from 'react'
import PostSummary from './PostSummary'
import DropDown from './DropDownMenu'

function Posts(props) {
  const [filters, setFilters] = React.useState([])

  const handleSelect = React.useCallback((value) => {
    console.log(value)
    setFilters(value)
  }, [])

  return (
    <>
      <div className="posts">
        <h1 className="content-subhead">Filter by topic or jurisdiction</h1>
        <DropDown onSelect={handleSelect} />
        {props.posts
          ?.filter((post) => {
            if (filters.length === 0) {
              return true
            }

            return filters.some((filter) =>
              post.categories.some((category) => category.id === filter.value)
            )
          })
          .map((post) => {
            return <PostSummary key={post.id} post={post} />
          })}
      </div>
    </>
  )
}

export default Posts
