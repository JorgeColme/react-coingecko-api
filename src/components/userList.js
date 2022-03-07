import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchAllCharacters } from '../store/slices/users'

function UserList() {

    const { list: character } = useSelector(state => state.character)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllCharacters());
    }, [dispatch])

    return (
        <div className="container">
            <div className="row">
                {
                    character.map((element, index) => (
                        <div key={index} className="col-md-3">
                            <div className="card">
                                <img src={element.image} alt="avatar" />
                                <div className="card-body">
                                    <h5 className="card-title">{`${element.name} `}</h5>
                                    <p className="card-text">{`${element.species} `}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default UserList