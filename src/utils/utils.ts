import { refetch } from "../routes/SearchGrid"
import { setCurrentOffset } from "../store"

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const handleOffset = (action: "increase" | "decrease") => {
  switch (action) {
    case "increase":
      setCurrentOffset(prevValue => (Number(prevValue) + 150).toString())
      break
    case "decrease":
      setCurrentOffset(prevValue =>
        prevValue !== "0" ? (Number(prevValue) - 150).toString() : "0"
      )
      break
  }
  refetch()
}
