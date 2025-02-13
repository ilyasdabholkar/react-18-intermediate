import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { Todo } from "./hooks/useTodos";
import axios from "axios";

interface AddTodoContext {
  prevTodos : Todo[]
}

const TodoForm = () => {
  const queryClient = useQueryClient();
  const addTodo = useMutation<Todo,Error,Todo,AddTodoContext>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),
    onMutate : (newTodo) => {
      const prevTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        newTodo,
        ...(todos || []),
      ]);
      if (ref?.current && ref?.current?.value) {
        ref.current.value = '';
      }
      return {prevTodos};
    },
    onSuccess: (savedTodo, newTodo) => {
      //APPROACH 1 : Invalidating Cache
      // queryClient.invalidateQueries({
      //   queryKey : ['todos']
      // })

      //APPROACH 2 : UPDATE data in cache
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => todos?.map(todo=>todo == newTodo ? savedTodo : todo));
      if (ref?.current && ref?.current?.value) {
        ref.current.value = '';
      }
    },
    onError : (error,newTodo,context) => {
      if(!context) return;
      queryClient.setQueryData<Todo[]>(['todos'],context.prevTodos);
    }
  });
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      {addTodo.error && <div className="alert alert-danger">{addTodo.error?.message}</div>}
      <form
        className="row mb-3"
        onSubmit={(event) => {
          event.preventDefault();

          if (ref?.current && ref?.current?.value) {
            addTodo.mutate({
              id: 0,
              title: ref?.current?.value,
              completed: false,
              userId: 1,
            });
          }
        }}
      >
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button className="btn btn-primary" disabled={addTodo.isPending}>{addTodo.isPending ? 'Adding...' : 'Add'}</button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
