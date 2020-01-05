import React from 'react';
import {useContext} from "react";
import {RoomContext} from "../Context";
import Title from "../Components/Title";


export default function RoomsFilter() {
    // get all unique value
    const getUnique = (items, value) => {
        return [...new Set(items.map(item => item[value]))]
    }
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        rooms,
        capacity, 
        price,
        minPrice, 
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;
    // get unique types
    let types = getUnique(rooms, "type");

    // add all
    types = ["all",...types];

    // map to jsx
    types = types.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    });

    let people = getUnique(rooms, "capacity");
    people = people.map((item, index)=>{
        return <option key={index} value={item}>{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title="search-rooms" />
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" 
                    value={type} className="form-control" onChange={handleChange} >
                         {types}
                    </select>
                </div>
                {/* end select type */}
                {/* guests */}
                <div className="form-group">
                    <label htmlFor="capacity">room type</label>
                    <select name="capacity" id="capacity" 
                    value={capacity} className="form-control" onChange={handleChange} >
                         {people}
                    </select>
                </div>
                {/* end guests */}
                {/* room price */}
                <div className="form-group">
                    <label htmlFor="price">
                        room price ${price}
                    </label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
                </div>
                {/* end room price */}
                {/* size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="minSize" value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" name="maxSize" id="maxSize" value={maxSize} onChange={handleChange} className="size-input" />
                    </div>
                </div>
                {/* end size */}
                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* end extras */}
            </form>
        </section>
    )
}
