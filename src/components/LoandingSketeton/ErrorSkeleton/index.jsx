import React from "react";

export function ErrorSkeleton({error}) {
  return (
    <div>
      {error}
      <p>Desesperate, estamos cargando</p>
    </div>
  )
}