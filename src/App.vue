<template>
  <main>
    <div class="container">
      <h1>欢迎使用待办事项</h1>
      <!-- 通过add-todo监听todoAdd里面的事件 -->
      <todo-add :tid="todos.length" @add-todo="addTodo" />
      <todo-filter :selected="filter" @change-filter="filter = $event" />
      <!-- 使用ref包装的数据需要通过value才能访问数据，但是因为在template中会自动解析 -->
      <todo-list :todos="filteredTodos" />
    </div>
  </main>
</template>

<script>
import TodoAdd from "./components/TodoAdd";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import useTodos from "@/composables/useTodos.js";
import useFilteredTodos from "@/composables/useFilteredTodos.js";

export default {
  name: "App",
  components: { TodoAdd, TodoFilter, TodoList },
  setup() {
    const { todos, addTodo } = useTodos();
    const { filter, filteredTodos } = useFilteredTodos(todos);

    // 为了在template中使用数据，使用return以对象的形式返回数据和函数
    return {
      todos,
      addTodo,
      filter,
      filteredTodos,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
}
/* 整个页面 */

main {
  width: 100vw;
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: rgb(203, 210, 240);
}

.container {
  width: 60%;
  max-width: 400px;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 48px 28px;
  background-color: rgb(245, 246, 252);
}

/* 标题 */
h1 {
  margin: 24px 0;
  font-size: 28px;
  color: #414873;
}
</style>
