import React, { useState, useEffect } from 'react'
import { Container } from '@material-ui/core'
import Memories from './images/memories.jpg'
import { AppBar, Typography, Grow, Grid } from '@material-ui/core'
import useStyles from './styles'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import { getPosts } from './actions/posts'
import { useDispatch } from 'react-redux'
const App = () => {
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])
  const classes = useStyles()

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={Memories}
          alt="entertainment"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}
export default App