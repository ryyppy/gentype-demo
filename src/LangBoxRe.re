[@genType.import "./LangBox"]
[@bs.module "./LangBoxRe.gen"]
external make:
  (~lang: string, 'a) =>
  ReasonReact.component(
    ReasonReact.stateless,
    ReasonReact.noRetainedProps,
    ReasonReact.actionless,
  ) =
  "";