import { Component } from "solid-js"
import { Pokeball } from "../../assets/Pokeball"
import { useNavigate } from "@solidjs/router"

export const Header: Component = () => {
  const navigate = useNavigate()
  return (
    <div
      style={{
        display: "flex",
        "flex-direction": "row",
        "justify-content": "center",
        "margin-top": "20px",
        "margin-bottom": "20px",
      }}
    >
      <Pokeball />
      <h1
        style={{
          "padding-left": "20px",
          "padding-right": "20px",
          cursor: "pointer",
        }}
        onClick={() => navigate("./")}
      >
        Pokedex
      </h1>
      <Pokeball />
    </div>
  )
}
