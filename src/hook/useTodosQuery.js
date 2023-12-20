import { useMutation } from "react-query";
import { addTodo, removeTodo, switchTodo } from "../api/todos";

export const useAddMutation = () => useMutation(addTodo);
export const useRemoveMutation = () => useMutation(removeTodo);
export const useSwitchMutation = () => useMutation(switchTodo);
