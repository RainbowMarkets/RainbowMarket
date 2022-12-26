import { createRoot } from "react-dom/client";
import { UserContextProvider } from "./context/UserContext";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
);
