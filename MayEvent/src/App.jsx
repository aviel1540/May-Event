import "./App.css";
import { MainLayout } from "./layouts/MainLayout";
import { AppHeader } from "./layouts/AppHeader";
import { AppFooter } from "./layouts/AppFooter";

function App() {
  return (
    <div>
      <AppHeader />
      <MainLayout />
      <AppFooter />
    </div>
  );
}

export default App;
