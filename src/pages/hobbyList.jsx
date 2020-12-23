import React from "react";
import PropTypes from 'prop-types';
import './hobby.css'

HobbyList.propTypes = {
    hobbyList: PropTypes.array,
    activeID: PropTypes.number,
    onHobbyClick: PropTypes.func,
}
HobbyList.defaultProps = {
    hobbyList: [],
    activeID: null,
    onClick: null,
}

function HobbyList(props) {
    const { hobbyList, activeID, onHobbyClick } = props;
    const handleClick = (hobby) => {
        if(onHobbyClick){
            onHobbyClick(hobby);
        }
    }
    return (
        <ul>
            {hobbyList.map((hobby) => {
                return (<li key={hobby.id}
                    className={hobby.id === activeID ? 'active' : ''}
                    onClick={() => {
                        handleClick(hobby)
                    }}
                >
                 {hobby.title}
             </li>)                
            })}
        </ul>
    )
}
export default HobbyList;