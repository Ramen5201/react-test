import React, {useState} from 'react';

const CreateMovie = (props) => {
    const {newMovie, onInputChange, onAddMovie} = props;
    return (
        <div>
            <h1>Create Moive</h1>
            <form action="">
                <div>
                    <input 
                        type="text"
                        name='id'
                        value={newMovie.id}
                        onChange={onInputChange}
                        placeholder='Input movie id' 
                    />
                </div>
                <div>
                    <input 
                        type="text"
                        name='title'
                        value={newMovie.title}
                        onChange={onInputChange}
                        placeholder='Input movie title' 
                    />
                </div>
                <div>
                    <input 
                        type="text"
                        name='genre'
                        value={newMovie.genre}
                        onChange={onInputChange}
                        placeholder='Input movie genre' 
                    />
                </div>
                <div>
                    <label>출시일 : </label>
                    <input 
                        type='date'
                        value={newMovie.release_Date}
                        onChange={onInputChange}
                        name='release_Date' 
                    />
                </div>
            </form>
            <button onClick={onAddMovie}>Add Movie</button>
        </div>
    );
};

export default CreateMovie;