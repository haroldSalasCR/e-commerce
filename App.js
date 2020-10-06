import React, { useState } from "react";
import ListingEdit from "./app/screen/ListingEdit";

import Login from "./app/screen/Login";
import Register from "./app/screen/Register";
import ImageInputList from "./app/components/ImageInputList";
import Screen from "./app/components/Screen";

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  return <ListingEdit />;
}
