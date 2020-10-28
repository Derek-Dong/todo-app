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
import { computed, ref } from "vue";

import TodoAdd from "./components/TodoAdd";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

export default {
  name: "App",
  components: { TodoAdd, TodoFilter, TodoList },
  setup() {
    // 使用ref保存空数组作为默认todo列表的数据
    const todos = ref([]);
    // 定义一个添加todo的函数：通过事件接收一个todo参数，保存todo信息添加到列表中
    const addTodo = (todo) => todos.value.push(todo);
    // 保持当前选中的过滤选项
    const filter = ref("all");
    // 根据filter的值过滤todos列表
    const filteredTodos = computed(() => {
      switch (filter.value) {
        case "done":
          return todos.value.filter((todo) => todo.completed);
        case "todo":
          return todos.value.filter((todo) => !todo.completed);
        default:
          return todos.value;
      }
    });
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
