
import React from 'react';
import { useSelector } from 'react-redux';


function Admin() {
    const user=useSelector(state=>state.hobby)
    console.log(u);
    return (
        <div>
            <div>admin</div>
        </div>
    );
}

export default Admin;