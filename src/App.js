import { Button, Container, Grid, makeStyles, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import { AddNewPost, DeletePost, GetAllPosts, UpdatePost } from './api/JsonPlaceholderData';

const useStyles = makeStyles(theme => ({
  left: {

  },
  right: {
    background: theme.palette.grey[100],
    boxShadow: '0 1px 3px gray',
    height: "90vh",
    // position: 'fixed',
    // top: 0,
    // right : 0
    margin: '1rem 0',
    borderRadius: '1rem'
  },

  containerGrid: {
    [theme.breakpoints.down('md')]: {
      // flexDirextion: 'column-reverse'
      flexDirection: 'column-reverse',
    }
  }
}))


function App() {
  const classes = useStyles()
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState({
    title: "",
    body: ""
  })

  useEffect(() => {
    GetAllPosts().then(data => {
      if (data) setPosts(data)
      console.log(data)
    })
  }, [])

  const AddPost = (e) => {
    e.preventDefault()
    AddNewPost(data).then(data => {
      setPosts(pre => ([data, ...pre]))
    })
  }
  const Delete = (id) => {
    console.log(id)

    DeletePost(id).then(data => {
      setPosts(pre => {
        return pre.filter(ele => {
          return ele.id !== id
        })
      })
      console.log("delete", data)
    })
  }

  const Update = (data)=>{
    UpdatePost(data).then(data=>{
      
    })
  }
  const handleChange = (e) => setData(pre => ({ ...pre, [e.target.name]: e.target.value }))

  return (
    <div className="App">

      {/* header representing website  */}
      <Header />

      {/* all the main contained */}
      <Container>
        <Grid container spacing={8}
          className={classes.containerGrid}
        // classes={{ "direction-xs-column-reverse": classes.containerGrid }} 
        >
          <Grid className={classes.left} item xs={12} md={8}>
            {
              posts.map(card => (
                <Card
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  body={card.body}
                  onDelete = {() => Delete(card.id)}
                  onUpdate = {() => Update(card.id)}

                />))
            }
          </Grid>
          <Grid className={classes.right} item xs={12} md={4}>

            <form onSubmit={AddPost} >
              <TextField
                variant="outlined"
                name="title"
                value={data.title}
                label="Title"
                color="secondary"
                size="small"
                fullWidth
                required
                onChange={handleChange}
              />
              <TextField
                name="body"
                variant="outlined"
                value={data.value}
                label="Body"
                color="secondary"
                size="small"
                fullWidth
                required
                onChange={handleChange}
                style={{
                  margin: '1rem 0'
                }}
              />
              <Button
                type="submit"
                style={{ fontWeight: 700 }}
                fullWidth
                color="secondary"
                variant="contained" >
                ADD POSTS
            </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;