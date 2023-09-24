import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PageLayout from "../PageLayout";

export default function RoutesLogic({ publicRoutes }) {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<PageLayout>{route.element}</PageLayout>}
        />
      ))}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}
