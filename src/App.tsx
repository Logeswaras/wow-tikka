import { useRoutes } from "react-router-dom";

//routes
import routes from "./providers/routes";

//react component
import { Suspense } from "react";

function App() {
  let route = useRoutes(routes);
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div>{route}</div>
    </Suspense>
  );
}

export default App;
