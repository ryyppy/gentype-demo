let component = ReasonReact.statelessComponent(__MODULE__);
/* this creates a record which we will nest in the color variant below */
type rgb = {
  r:string,
  g:string,
  b:string,
};
[@genType]
type color = Blue | Rgb(rgb);
/* simple variant */
/* [@genType]
type color = Blue | Orange; */

[@genType]
let make = (~color: color, ~size: string, _children) => {
  ...component,
  render: _self => {
    let colorStr = switch(color){
      | Blue => "blue"
      /* use pattern matching to pull out types in Rgb from rgb type, return js string */
      | Rgb({r,g,b}) => {j|#$r$g$b|j}
    };
    let style = ReactDOMRe.Style.make(
      ~backgroundColor=colorStr,
      ~height=size,
      ~width=size,
      (),
    );
    <div style>
    /* <div style /> */
    <LangBoxRe lang="ocaml" />
    </div>;
  },
};