import React, { useState } from "react";
import { Link } from "react-router-dom";
/* import setInProp from "../../App"; */
import logo from "../../assets/logo.svg";
import { CSSTransition } from "react-transition-group";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
type Props = {};

const Home = (props: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [inProp, setInProp] = useState(false);
  const auth = getAuth();
  const clickHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        return navigate("/order-config");
      } else {
        return navigate("/sign-in");
      }
    });
  };
  return (
    <div className="container mx-auto min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto">
        <p className="text-4xl font-bold text-center">pizzÁtron</p>
      </div>

      <main className="container my-6 mx-auto">
        <div className="text-center flex items-center justify-center">
          <CSSTransition in={inProp} timeout={200} classNames="my-node">
            <div></div>
          </CSSTransition>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover:stroke-neworange">
            <img src={logo} alt="pizzalogo" onClick={clickHandler} />
            <p onClick={clickHandler} className="font-thin my-2">
              order Á pizzÁ
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}; /* else {
    return (
      <div className="container mx-auto min-h-screen flex flex-col justify-center items-center">
        <div className="container mx-auto">
          <p className="text-4xl font-bold text-center">pizzÁtron</p>
        </div>

        <main className="container my-6 mx-auto">
          <div className="text-center flex items-center justify-center">
            <CSSTransition in={inProp} timeout={200} classNames="my-node">
              <div></div>
            </CSSTransition>
            <Link
              onClick={() => setInProp(true)}
              to="/sign-in"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover:stroke-neworange"
            >
              <MyLogo onClick={() => setInProp(true)} />
              <p onClick={() => setInProp(true)} className="font-thin my-2">
                order Á pizzÁ
              </p>
            </Link>
          </div>
        </main>
      </div>
    );
  } */

export default Home;
