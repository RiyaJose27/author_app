import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthorCard from '../components/AuthorCard';



const AllAuthors = (props) => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(true);

    useEffect(() => {
        console.log("running use effect");
        console.log(loaded);
        axios.get("http://localhost:8000/api/authors/all")
            .then(res => {
                setAuthors(res.data.results);
            })
            .catch(err => console.log(err))
    }, [loaded])
    return (
        <div>

            <h2>We have quotes by:</h2>
            <table>
                <thead>
                    <tr>
                        <th>Authors</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                

                {
                    authors.map((item, i) => {
                        return <AuthorCard key={i} data={item} setLoaded={setLoaded} />
                    })
                }
                </table>
        </div>
    )
}
export default AllAuthors;


