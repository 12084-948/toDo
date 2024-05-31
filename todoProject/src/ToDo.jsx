import React, { useState } from 'react'
import './ToDo.css'

const ToDo = () => {

    const [inputData, setInputData] = useState('')
    const [items, setItems] = useState([])
    const [com, setCom] = useState(false)

    const addItem = () => {
        if (!inputData) {

        }
        else {
            setItems([...items, inputData])
            setInputData('')
        }
    }

    const deleteItem = (id) => {
        const updatedItems = items.filter((elem, index) => {
            return index !== id
        })
        setItems(updatedItems)
    }

    

    

    const removeAll = () => {
        setItems([])
    }

    return (
        <>
            <div className="mainDiv">
                <div className="childDiv">
                    <h1>To Do List</h1>
                    <div className="logo">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy1eDovRF0hLYHH1QG9iakiuxcmINKCIklew&usqp=CAU" alt="" />
                        <p>Add Your List Here</p>
                    </div>

                    <div className="addItems">
                        <input type="text" placeholder='Add Items...'
                            value={inputData} onChange={(e) => setInputData(e.target.value)}
                        />

                        <i class="fa-solid fa-plus" title='Add Item' onClick={addItem}></i>
                    </div>

                    <div className="showItems">
                        {
                            items.map((elem, index) => {
                                return (
                                    <div className="eachItem" key={index}>
                                        <p>{elem}</p>
                                        <div className="iTags">
                                            <i class="fa-solid fa-trash" title='Delete Item' onClick={() => { deleteItem(index) }}></i>
                                            <i class="fa-solid fa-square-check" ></i>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="showItems" onClick={removeAll}>
                        <button>Remove All</button>
                    </div>
                </div>

            </div>
        </>
    )
}


export default ToDo