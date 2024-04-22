import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import { TimeTracking } from "./components/TImeTracking/TimeTracking";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <main className="main">
        <Router>
          <Routes>
            <Route path={"/daily"} element={<TimeTracking />} />
            <Route path={"/weekly"} element={<TimeTracking />} />
            <Route path={"/monthly"} element={<TimeTracking />} />
            <Route index element={<Navigate to={"/weekly"} replace />} />
            <Route path="*" element={<h1>Not found 404</h1>} />
          </Routes>
        </Router>
      </main>
    </ErrorBoundary>
  );
}

export default App;
