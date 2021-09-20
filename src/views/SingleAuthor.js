import React, { useEffect, useState } from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import AuthorCard from '../components/AuthorCard';

const SingleAuthor = (props) => {
    const {_id} = useParams();
    const [author, setAuthor] = useState({});

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors/" + _id)
            .then(res=>{console.log(res)
                setAuthor(res.data.results)})
            .catch(err=>console.log(err));
    },[_id])

    return(
        <div className="d-flex justify-content-center mt-5">
            <div>
                {author.name}<br/>
                <Link to={`/authors/${_id}/edit`} className="btn btn-lg btn-warning">Edit</Link>
            </div>
        </div>
    )
}

export default SingleAuthor;
