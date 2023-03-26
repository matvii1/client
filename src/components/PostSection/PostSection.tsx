import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import * as React from 'react'
import PostList from './PostList'
import { TabsWrapper } from './StyledPostSection'

export default function PostSection() {
  const [value, setValue] = React.useState(0)

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    setValue(newValue)
  }

  return (
    <Box>
      <TabsWrapper>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example">
          <Tab label="New" {...a11yProps(0)} sx={{ textTransform: 'none' }} />
          <Tab
            label="Popular"
            {...a11yProps(1)}
            sx={{ textTransform: 'none' }}
          />
        </Tabs>
      </TabsWrapper>
      <TabPanel value={value} index={0}>
        <PostList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PostList />
      </TabPanel>
    </Box>
  )
}

type Props = {
  children: React.ReactNode
  index: number
  value: number
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

function TabPanel(props: Props) {
  const { children, value, index } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}>
      {value === index && <Box>{children}</Box>}
    </div>
  )
}
