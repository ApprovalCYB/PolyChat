import React, { useState} from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';

const Layout = ( { openProfile = false, setOpenProfile }: { openProfile: Boolean, setOpenProfile: React.Dispatch<React.SetStateAction<boolean>> } ) => {    
    return (
        <div onClick={()=>{if(openProfile) {setOpenProfile(false)}}}>
            <Header openProfile={openProfile} setOpenProfile={setOpenProfile} />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;