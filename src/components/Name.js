import React, { useState } from "react";

// import { Container } from './styles';

export default function Name() {
  const [name, setName] = useState("");
  return (
    <label className="header-name">
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        onClick={e => e.target.setSelectionRange(0, e.target.value.length)}
        placeholder="Untitled"
      />
      <h1>{name}</h1>
    </label>
  );
}
