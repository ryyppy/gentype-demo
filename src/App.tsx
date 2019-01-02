import React, { Component } from "react";
import LangBox from "./LangBox";
import "./style.css";
import ColorSquare from "./ColorSquare.gen";

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
            <ColorSquare color="red" size="100px"/>
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
