let component = ReasonReact.statelessComponent(__MODULE__);
[@genType]
type color = Blue | Orange;

[@genType]
let make = (~color: color, ~size: string, _children) => {
  ...component,
  render: _self => {
    let colorStr = switch(color){
      | Blue => "blue"
      | Orange => "orange"
    };
    let style = ReactDOMRe.Style.make(
      ~backgroundColor=colorStr,
      ~height=size,
      ~width=size,
      (),
    );
    <div style />;
  },
};