import React, { Component } from "react";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="w-100 tc overpass">
        <header className="f1 h50 w50 bg-primary white tc montserrat relative">
          Hello ReasonLDN!
        </header>
        <main className="f2">
          <section className="w6 center pv6 bg-sand">
            Let's demonstrate some <code>genType</code> action!
          </section>
        </main>
      </div>
    );
  }
}

export default App;
