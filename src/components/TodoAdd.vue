<template>
  <div class="input-add">
    <!-- 
      v-model 同步用户输入的内容
      @keyup.enter给回车键添加函数
     -->
    <input
      type="text"
      name="todo"
      v-model="todoContent"
      @keyup.enter="emitAddTodo"
    />
    <button @click="emitAddTodo">
      <i class="plus"></i>
    </button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "TodoAdd",
  // props可以访问传递进来的属性，context保留了vue上下文的信息
  setup(props, context) {
    return useEmitAddTodo(props.tid, context.emit);
  },
};

function useEmitAddTodo(tid, emit) {
  const todoContent = ref("");

  const emitAddTodo = () => {
    const todo = {
      id: tid,
      // 这里需要使用value才能使用ref中的值
      content: todoContent.value,
      completed: false,
    };
    emit("add-todo", todo);
    todoContent.value = "";
  };

  return {
    todoContent,
    emitAddTodo,
  };
}
</script>

<style>
.input-add {
  position: relative;
  display: flex;
  align-items: center;
}

.input-add input {
  padding: 16px 52px 16px 18px;
  border-radius: 48px;
  border: none;
  outline: none;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.08);
  width: 100%;
  font-size: 16px;
  color: #626262;
}

.input-add button {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: linear-gradient(#c0a5f3, #7f95f7);
  border: none;
  outline: none;

  color: #fff;
  position: absolute;
  right: 0;

  cursor: pointer;
}

.input-add .plus {
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);
  background-size: 50% 2px, 2px 50%;
  background-position: center;
  background-repeat: no-repeat;
}
</style>