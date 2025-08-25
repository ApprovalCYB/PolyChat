import { useState } from "react";
import "./Header.css";
import { Avatar, Button } from "@mui/material"

const Header = ( { openProfile = false, setOpenProfile }: { openProfile: Boolean, setOpenProfile: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [ isLogin, setIsLogin ] = useState( true );

  return (
    <header>
      <div className="left-header">
        <h1>Polly Chat</h1>
      </div>
      <div className="right-header">
        { !isLogin ? (
          <Button onClick={ () => { setIsLogin( !isLogin ) } }>Login</Button>
        ) : (
          <>
            <Button onClick={ () => { setOpenProfile( !openProfile ) } } sx={ { p: 0 } }>
              <Avatar sx={ { width: 32, height: 32 } }>M</Avatar>
              </Button>
              { openProfile && (
                <div className="profile-dropdown">
                  <div className="dropdown-item">
                    <Button onClick={ () => { setIsLogin( !isLogin ) } }>Logout</Button>

                  </div>
                </div>
              )}
          </>
        ) }
      </div>
    </header>
  );
};

export default Header;