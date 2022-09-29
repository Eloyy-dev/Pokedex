import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from '../store/slices/userName.slice'
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [inputName, setInputName] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const send =
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-location" width="26" height="26" viewBox="0 0 24 24" strokeWidth={"2.0"} stroke="#000000" fill="none" strokeLinecap={"round"} strokeLinejoin={"round"}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
    </svg>
  const dispatchChangeName = () => {
    dispatch(changeName(inputName))
    navigate("/pokedex")

  }

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      dispatchChangeName()
    }
  }

  return (
    <>
      <div className="background-login">
        <div className="Log-in">
          <div className="App">
            <div className="App-first">
              <h1>Hello trainer!</h1>
              <img src="https://pm1.narvii.com/6354/c11e36230bfb135687d90d891eba9829f96ef80b_hq.jpg" alt="" className="img-login" />
            </div>
            <div className="App-second">
              <input
                type="text"
                value={inputName}
                onChange={e => setInputName(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Put your name"
              />
              <button onClick={dispatchChangeName} className="btn-login">{send}</button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default LogIn;