import React, { useState, useEffect } from "react";
import Item from "./components/Item/Item";
import Placeholder from "./components/Placeholder/Placeholder";

const App = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return <>{loading ? <Placeholder /> : <Item />}</>;
};

export default App;
