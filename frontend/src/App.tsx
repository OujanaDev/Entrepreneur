import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Landing from "@/pages/Landing";
import { Conditions, Confidentialite, MentionsLegales } from "@/pages/Legal";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 50);
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="mentions-legales" element={<MentionsLegales />} />
          <Route path="confidentialite" element={<Confidentialite />} />
          <Route path="conditions" element={<Conditions />} />
          {/* Old addresses of the previous version. */}
          <Route path="cgv" element={<Navigate to="/conditions" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}
