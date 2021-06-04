import {
    Button, Typography,
    Card, CardActionArea,
    CardActions, CardContent,
    makeStyles,
    TextField
} from "@material-ui/core";
import { useState } from "react";
import { UpdatePost } from "../api/JsonPlaceholderData";

const useStyles = makeStyles(theme => ({
    card: {
        margin: theme.spacing(3, 0),
        borderRadius: "6px"
    },
    delete: { background: theme.palette.error.main },
    title: { textTransform: 'capitalize' }
}))

function PostCard({ id, title, body, onDelete }) {
    const classes = useStyles()
    const [input, setInput] = useState({
        title: '',
        body: ''
    })
    const [edit, setEdit] = useState(true);

    const handleChange = (e) => {
        setInput(pre => ({
            ...pre,
            [e.target.name]: e.target.value
        }))
    }
    const onUpdate = (id) => {
        console.log(id, "update ")
        UpdatePost({ id, ...input }).then(data => {
            id = data.id
            title = data.title
            body = data.body
            setEdit(true)
        })
    }
    return (
        <Card key={id} raised className={classes.card}>
            <CardActionArea>
                <CardContent>
                    {
                        edit ?
                            <>
                                <Typography
                                    variant="h5"
                                    color="textPrimary"
                                    gutterBottom
                                    className={classes.title}
                                >
                                    {title}</Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                    gutterBottom
                                >
                                    {body}
                                </Typography>
                            </> :
                            <>
                                <TextField
                                    name="title"
                                    label="title"
                                    onChange={handleChange}>
                                    {title}
                                </TextField>

                                <TextField
                                    label="body"
                                    name="body"
                                    onChange={handleChange}>
                                    {body}
                                </TextField>
                            </>
                    }
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={() => setEdit(!edit)} variant="outlined" color="primary">
                    Edit
            </Button>
                <Button size="small" className={classes.delete} onClick={onDelete} variant="contained">
                    Delete
          </Button>
                <Button size="small" color="primary" onClick={() => onUpdate(id)} variant="contained">
                    Update
          </Button>
            </CardActions>
        </Card>

    )
}

export default PostCard
