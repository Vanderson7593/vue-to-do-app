import { ETodo } from "~/constants/todo"

export interface ITodo {
  [ETodo.Id]: number
  [ETodo.Label]: string
}