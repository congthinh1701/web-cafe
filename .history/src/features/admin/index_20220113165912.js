
import React from 'react';
import { useSelector } from 'react-redux';


function Admin() {
    const [profile,setProfile]=useState([])
    const user=useSelector(state=>state.user)
    console.log(user);
    setProfile(user)
    return (
        <div>
            <div>admin</div>
        </div>
    );
}

export default Admin;