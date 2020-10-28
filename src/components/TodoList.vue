<template>
  <div class="todo-list">
    <!-- 通过todo-item将todo信息传递给todo-list-item子组件 -->
    <todo-list-item
      v-for="todo in todos"
      :key="todo.id"
      :todo-item="todo"
      @change-state="todo.completed = $event.target.checked"
    ></todo-list-item>
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem";

export default {
  name: "TodoList",
  components: { TodoListItem },
  // 接收父组件传递的todos列表数据
  props: ["todos"],
};
</script>

<style>
.todo-list {
  display: grid;
  row-gap: 14px;
}
</style>