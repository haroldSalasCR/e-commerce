import React, { useState } from "react";

import Login from "./app/screen/Login";

const categories = [
  { label: "Categoria - 1", value: 1 },
  { label: "Categoria - 2", value: 2 },
  { label: "Categoria - 3", value: 3 },
  { label: "Categoria - 4", value: 4 },
  { label: "Categoria - 5", value: 5 },
];

export default function App() {
  const [category, setCategory] = useState();
  return <Login />;
}
