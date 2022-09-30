import { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchBar = ({onSubmit}) => {
    const [photoSerach, setPhotoSerach] = useState("");

    const handleChage = event => {
        const {value} = event.target;
        setPhotoSerach(value);
    }

    const hendlerSubmit = event => {
        event.preventDefault();
        onSubmit(photoSerach.trim());
    }
    return(
        <header className="Searchbar">
            <form className="SearchForm" onSubmit={hendlerSubmit}>
                <button type="submit" className="SearchForm-button">
                    <AiOutlineSearch size={20}/>
                </button>
                <input
                className="SearchForm-input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                onChange={handleChage}
                name="photoSerach"
                value={photoSerach}
                />
            </form>
        </header>
    )
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func
}