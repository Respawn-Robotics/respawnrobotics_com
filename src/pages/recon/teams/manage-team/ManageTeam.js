import React, { useState, useEffect } from "react";

import { query, collection, where, getDocs, doc } from 'firebase/firestore';
import db from '../../../../firebase.config';
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'

function ManageTeam() {
    const auth = getAuth();
    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate()
    const [isAdmin, setIsAdmin] = useState(null)
    const [team, setTeam] = useState(null)

    const isUserAdmin = async () => {
        const q = query(collection(db, "recon-teams"), where("owner", "==", user?.uid));
        const q2 = query(collection(db, "recon-teams"), where("admins", "array-contains", user?.uid));

        const doc1 = await getDocs(q);
        const doc2 = await getDocs(q2);
        
        return (doc1.empty && doc2.empty) ? false : true
    }

    const fetchTeam = async () => {
        const q = query(collection(db, "recon-teams"), where("users", "array-contains", user?.uid));

        const doc1 = await getDocs(q);

        return doc1.docs[0]
    }

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/signin");
        isUserAdmin().then(res => setIsAdmin(res))
        fetchTeam().then(res => setTeam(res.data()))
      }, [user, loading]);
    
    return <>
    {team ? 
    <>
        <h1 className='no-data-message'>Team Name: {team.teamName}</h1> 
        <h1 className='no-data-message'>Users</h1>
        {team.users.map(user => <h1>{user}</h1>)}
    </>
    : <> Loading... </>}
        
    </>
}

export default ManageTeam;