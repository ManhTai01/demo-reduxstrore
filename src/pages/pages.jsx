import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewHobby, setActiveHobby } from "../actions/hobby";
import HobbyList from "./hobbyList";


function Page() {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeID = useSelector(state => state.hobby.activeID);

    const dispatch = useDispatch();
    const randomID = () => {
    return 1000 + Math.trunc((Math.random() * 9000));
}
    const newID = randomID();
    const handleAddHobby = () => {
    const newHobby = {
        id: newID, 
        title:`HOBBY ${newID }` ,    
    }
    const action = addNewHobby(newHobby);
        dispatch(action);
    }  
    const handleClickHobby = (hobby) => {
        dispatch(setActiveHobby(hobby));
    }
    return ( 
        <div>
            <h1>REDUX --- HOOKS DEMO</h1>
            <button onClick={handleAddHobby}>ADD HOBBY</button>
            <HobbyList hobbyList={hobbyList}
            activeID={activeID}
                onHobbyClick={
                handleClickHobby
            }
            ></HobbyList>
        </div>
    )
}
export default Page;    