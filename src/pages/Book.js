import {useOutletContext, useParams} from 'react-router-dom';

export function Book() {
    const {id} = useParams();
    const obj = useOutletContext();
    return (
        <h1>Book {id} ContextValue = {obj.val}</h1>
    )
}