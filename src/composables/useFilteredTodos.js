import { computed, ref } from "vue";

export default function useFilteredTodos(todos) {
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
    return {
        filter,
        filteredTodos,
    };
}