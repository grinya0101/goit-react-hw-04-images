import PropTypes from "prop-types";

export const Button = ({onClick}) => {
    const handlerClick = () => {
        onClick();
    }
    return(
        <button type="button" className="Button" onClick={handlerClick}>Load more</button>
    )
}



Button.propTypes = {
    onClick: PropTypes.func
}