import React from "react";
//
import { Routes, Route } from "react-router-dom";
//
import { LayoutWrapper } from "./components";
import { Home, Create, Event, NotFound } from "./pages";

function App() {
  return (
    <main className="bg-gradient-to-br from-envited-secondary-purple-100 to-envited-nuetral-gray-100">
      {/* <React.Suspense fallback={<LibComponents.FullPageSpinner />}> */}
      <Routes>
        <Route element={<LayoutWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="event" element={<Event />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {/* </React.Suspense> */}
    </main>
  );
}

export default App;
