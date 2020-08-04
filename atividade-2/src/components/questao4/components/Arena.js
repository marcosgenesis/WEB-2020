import React from "react";

export default function Arena(props) {
  return (
    <div>
      <h1>Questão 04</h1>
      {React.Children.map(props.children, (arena) => {
        return React.cloneElement(arena, { ...props });
      })}
    </div>
  );
}
