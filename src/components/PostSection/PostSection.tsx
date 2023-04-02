import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '~/App'
import { fetchNewPosts, fetchPopularPosts } from '~/store/slices/post-slice'
import PostList from './PostList'
import { TabsWrapper } from './StyledPostSection'
import TabPanel from './TabPanel'

export default function PostSection() {
  const [tab, setTab] = useState(0)
  const [searchParams, setSearchParams] = useSearchParams()
  const currentTab = searchParams.get('sort') || ''

  const dispatch = useAppDispatch()
  const { status, posts } = useAppSelector((state) => state.posts)

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    setTab(newValue)
  }

  useEffect(() => {
    if (tab === 0) {
      setSearchParams({ sort: 'new' })
      dispatch(fetchNewPosts())
    }

    if (tab === 1) {
      setSearchParams({ sort: 'popular' })
      dispatch(fetchPopularPosts())
    }
  }, [tab])

  return (
    <Box>
      <TabsWrapper>
        <Tabs
          value={tab}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="New" {...muiProps(0)} sx={{ textTransform: 'none' }} />
          <Tab
            label="Popular"
            {...muiProps(1)}
            sx={{ textTransform: 'none' }}
          />
        </Tabs>
      </TabsWrapper>
      <TabPanel value={tab} index={0}>
        <PostList isLoading={status === 'loading'} posts={posts} />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <PostList isLoading={status === 'loading'} posts={posts} />
      </TabPanel>
    </Box>
  )
}

function muiProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}
