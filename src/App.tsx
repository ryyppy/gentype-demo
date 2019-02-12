import React, { Component } from "react";
import LangBox from "./LangBox";
import "./style.css";
// import ColorSquare, {Blue, Orange} from "./ColorSquare.gen";
// Rgb is a function that takes values for r, g, and b
import ColorSquare, {Blue, Rgb} from "./ColorSquare.gen";
// export abstract class ColorRgb { protected opaque!: any }; /* simulate opaque types */
// above is tsx generated representation of Rgb values
class App extends Component {
  render() {
    return (
      <div className="w-100 tc overpass">
        <header className="f1 h50 w50 bg-primary white tc montserrat relative">
          Hello ReasonLDN!
        </header>
        <main className="f2 tc">
          <section className="w6 center pv6 bg-sand">
            Let's demonstrate some <code>genType</code> action!
          </section>
          <section className="w6 center pv6 bg-sand">
            <ColorSquare color={Blue} size="100px"/>
            {/* pass rgb values for black to Rgb() */}
            <ColorSquare color={Rgb({r:"00",g:"00",b:"00",})} size="100px"/>
          </section>
          <section className="pv6 bg-sand-lighten-20">
            <div className="flex flex-row justify-around">
              <LangBox lang="typescript" />
              <LangBox lang="ocaml" />
              <LangBox lang="reason" />
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
