import React from "react";

const SeifContext = React.createContext();

const ContextProvider = SeifContext.Provider;
const ContextConsumer = SeifContext.Consumer;

export { ContextProvider, ContextConsumer, SeifContext };
