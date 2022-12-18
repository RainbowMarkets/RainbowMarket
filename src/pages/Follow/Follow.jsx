import React from "react";
import { useParams } from "react-router-dom";

export default function Follow() {
  const params = useParams();

  console.log(params);
  return <div>Follow</div>;
}
