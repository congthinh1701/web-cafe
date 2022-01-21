
import React, { useState } from 'react';
import { useSelector } from 'react-redux';


function Admin() {
    const [profile,setProfile]=useState([])
    const user=useSelector(state=>state.user)
    setProfile(user)
    console.log(profile);

    return (
        <div>
            <div>admin</div>
        </div>
    );
}

export default Admin;