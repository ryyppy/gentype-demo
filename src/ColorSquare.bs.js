'use strict';

var Block = require("bs-platform/lib/js/block.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var LangBoxReGen = require("./LangBoxRe.gen");

var component = ReasonReact.statelessComponent("ColorSquare");

function make(color, size, _children) {
  return /* record */Block.record([
            "debugName",
            "reactClassInternal",
            "handedOffState",
            "willReceiveProps",
            "didMount",
            "didUpdate",
            "willUnmount",
            "willUpdate",
            "shouldUpdate",
            "render",
            "initialState",
            "retainedProps",
            "reducer",
            "jsElementWrapped"
          ], [
            component[/* debugName */0],
            component[/* reactClassInternal */1],
            component[/* handedOffState */2],
            component[/* willReceiveProps */3],
            component[/* didMount */4],
            component[/* didUpdate */5],
            component[/* willUnmount */6],
            component[/* willUpdate */7],
            component[/* shouldUpdate */8],
            (function (_self) {
                var colorStr;
                if (color) {
                  var match = color[0];
                  colorStr = "#" + (String(match[/* r */0]) + ("" + (String(match[/* g */1]) + ("" + (String(match[/* b */2]) + "")))));
                } else {
                  colorStr = "blue";
                }
                var style = {
                  backgroundColor: colorStr,
                  height: size,
                  width: size
                };
                return React.createElement("div", {
                            style: style
                          }, ReasonReact.element(undefined, undefined, LangBoxReGen.make("ocaml", /* array */[])));
              }),
            component[/* initialState */10],
            component[/* retainedProps */11],
            component[/* reducer */12],
            component[/* jsElementWrapped */13]
          ]);
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
