import React from "react";
import ts_logo from "./assets/ts_logo.svg";
import reason_logo from "./assets/reason_logo2.svg";
import ocaml_logo from "./assets/ocaml_logo.svg";

type Language = "reason" | "typescript" | "ocaml";

export default (props: { lang: Language }) => {
  let src;

  switch (props.lang) {
    case "reason":
      src = reason_logo;
      break;
    case "ocaml":
      src = ocaml_logo;
      break;
    case "typescript":
      src = ts_logo;
      break;
  }

  return <img src={src} className="w4 h4" />;
};
