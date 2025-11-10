import React from 'react'
import { articles, DataTable } from '@/components/article-table'
import { columns } from '@/components/article-table'

const PostListPage = () => {
  return (
    <div>
      <DataTable columns={columns} data={articles} />
    </div>
  )
}

export default PostListPage
