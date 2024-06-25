<script setup>
defineProps({
    transactions: {
        type: Array,
        required: true,
    },
});

const emits = defineEmits(['delete']);

const deleteTransaction = (id) => {
    emits('delete', id);
};
</script>

<template>
    <h3>Transactions</h3>

    <ul id="list" class="list">
        <li v-for="transaction in transactions" :key="transaction.id"
            :class="transaction.amount > 0 ? 'plus' : 'minus'">
            {{ transaction.descritpion }} <span>€{{ transaction.amount }}</span>
            <button class="delete-btn" @click="deleteTransaction(transaction.id)">x</button>
        </li>
    </ul>
</template>