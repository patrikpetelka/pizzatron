import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as MyLogo } from "../assets/logo.svg";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();
  const user = auth.currentUser;

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        return navigate("/profile");
      } else {
        return navigate("/sign-in");
      }
    });
  };

  const pathMatchRoute = (route: any) => {
    if (route === location.pathname) {
      return true;
    }
  };
  const name = user?.displayName;

  /*   const [formData, setFormData] = useState({
    name: auth.currentUser?.displayName,
  });

  const { name } = formData; */

  /*   useEffect(() => {
    if (!name) return navigate("/");
  }, [name, navigate]); */

  return (
    <header className="my-4">
      <nav className="navbarNav">
        <ul className="m-0 p-0 flex justify-evenly items-center">
          <li className="navbarListItem" onClick={() => navigate("/offers")}>
            <p>pizzÁtron</p>
          </li>
          <li
            className="cursor-pointer flex flex-col items-center"
            onClick={() => navigate("/")}
          >
            <MyLogo className=" w-12 h-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover:stroke-neworange" />
            <p
              className={
                pathMatchRoute("/")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            ></p>
          </li>
          <li className="navbarListItem" onClick={handleClick}>
            <p>{name}</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
