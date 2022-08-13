import React, { useState } from "react";
import Navbar from "./components/app/navbar/Navbar";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Footer from "./components/app/footer/Footer";

function Dex() {
  const [click, setClick] = useState(false);
  let [id, setId] = React.useState(sessionStorage.getItem("id"));
  let [email, setEmail] = useState("");
  let [modal, setModal] = React.useState(false);

  return (
    <>
      <div className="background"></div>
      <Navbar
        setClick={setClick}
        click={click}
        id={id}
        setId={setId}
        modal={modal}
        setModal={setModal}
        email={email}
        setEmail={setEmail}
      />
      <Outlet context={[modal, setModal, id]} />
      <Footer click={click} />
    </>
  );
}

export default Dex;
