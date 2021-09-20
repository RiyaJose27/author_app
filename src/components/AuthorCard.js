import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const AuthorCard = (props) => {
    const { name, description } = props.data;

    const onDeleteHandler = (_id) => {
        console.log(_id);

        axios.delete(`http://localhost:8000/api/authors/${_id}/delete`)
            .then(res => {
                console.log(res);
                props.setLoaded(prevState => !prevState);
            })
            .catch(err => console.log(err));
    }



    return (

        
                <tr>
                    <td><Link to={`/authors/${props.data._id}`}>{name}</Link></td>
                    {/* <p>{description}</p> */}
                    <td><button className="btn btn-sm btn-danger" onClick={() => onDeleteHandler(props.data._id)}>Delete</button></td>
                    <td><Link to={`/authors/${props.data._id}`} className="btn btn-sm btn-warning">Edit</Link> </td>
                </tr>
        

    )

}


export default AuthorCard;


