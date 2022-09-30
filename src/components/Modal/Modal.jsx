import { useEffect } from "react";
import PropTypes from "prop-types"
import { createPortal } from "react-dom";
const modalPortal = document.querySelector("#modal-root");

export const Modal = ({path, onClick}) => {
    const overlayClickHendler = event => {
        if(event.target === event.currentTarget){
            onClick("");
        }
    }
    useEffect(() => {
        const escapeHendler = () => {
            onClick("");
        }
        window.addEventListener("keydown", escapeHendler);
        return() => {
            window.removeEventListener("keydown", escapeHendler);
            
        };
    }, [onClick]);


    return(
        createPortal(<div onClick={overlayClickHendler} className="Overlay">
            <div className="Modal">
                <img src={path} alt="Big img"/>
            </div>
        </div>, modalPortal)
    )
}

Modal.propTypes = {
    path: PropTypes.string,
    onClick: PropTypes.func
}