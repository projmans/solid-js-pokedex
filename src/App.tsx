import { type Component } from "solid-js"

import styles from "./App.module.css"
import { Header } from "./components/Header/Header"
import { SearchGrid } from "./routes/SearchGrid"
import { Details } from "./routes/Details"
import { Route, Routes } from "@solidjs/router"

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Header />
      <Routes>
        <Route path="/" component={SearchGrid} />
        <Route path="/pokemon/:pokemon" component={Details} />
        <Route
          path="/about"
          element={<div>This site was made with Solid</div>}
        />
      </Routes>
    </div>
  )
}

export default App
