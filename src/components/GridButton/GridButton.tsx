import { Component } from "solid-js"
import { capitalizeFirstLetter } from "../../utils/utils"

import styles from "../../App.module.css"

type Props = {
  name: string
  url: string
  onClick: () => void
}

export const GridButton: Component<Props> = props => {
  return (
    <div class={styles.listButton} onClick={props.onClick}>
      {capitalizeFirstLetter(props.name)} - {props.url.split("/").reverse()[1]}
    </div>
  )
}
