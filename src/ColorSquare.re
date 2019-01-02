let component = ReasonReact.statelessComponent(__MODULE__);

[@genType]
let make = (~color: string, ~size: string, _children) => {
  ...component,
  render: _self => {
    let style = ReactDOMRe.Style.make(
      ~backgroundColor=color,
      ~height=size,
      ~width=size,
      (),
    );
    <div style />;
  },
};