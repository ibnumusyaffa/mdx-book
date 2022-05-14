import React from "react";


export default function Home() {
  let [show, setShow] = React.useState(false);
  function toggleShow() {
    setShow((prev) => !prev);
  }
  return (
    <div className="h-screen">
      adadad
    </div>
  );
}
