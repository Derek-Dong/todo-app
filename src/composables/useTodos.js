import { ref } from "vue";

export default function useTodos() {
    // 使用ref保存空数组作为默认todo列表的数据
    const todos = ref([]);
    // 定义一个添加todo的函数：通过事件接收一个todo参数，保存todo信息添加到列表中
    const addTodo = (todo) => todos.value.push(todo);

    // 为了在template中使用数据，使用return以对象的形式返回数据和函数
    return {
        todos,
        addTodo,
    };
}