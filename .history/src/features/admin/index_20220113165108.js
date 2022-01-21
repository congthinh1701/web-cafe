
import React from 'react';
import { useSelector } from 'react-redux';


function Admin() {
    const user=useSelector(state=>state.hobby)
    return (
        <div>
            <div>admin</div>
        </div>
    );
}

export default Admin;