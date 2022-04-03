import React from "react";

const WithContextStore = (Provider) => (Component) => (props) => {
  return (
    <Provider>
      <Component {...props} />
    </Provider>
  );
};

export default WithContextStore;
