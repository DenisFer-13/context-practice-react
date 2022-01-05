import React, { useContext } from "react";
import { Context } from "../context/context";

export default function ComponentThree() {
  const { setState, state } = useContext(Context);
  return (
    <div>
      ESTE COMPONENTE EDITARÁ EL ESTADO.
      <button
        onClick={() => {
          setState("Orlando & Marcela");
        }}
      >
        CAMBIAR TEXTO POR: "OTRA COSA"
      </button>
    </div>
  );
}
