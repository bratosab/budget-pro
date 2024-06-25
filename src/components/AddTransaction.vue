<script setup>
import { ref } from 'vue';

const emits = defineEmits(['add']);

const descritpion = ref('')
const amount = ref('')

function add() {
    if (!descritpion.value || !amount.value) {
        alert('Both fields must be set.')
        return;
    }

    const transaction = {
        id: Math.floor(Math.random() * 100000),
        descritpion: descritpion.value,
        amount: amount.value
    }

    emits('add', transaction)
    descritpion.value = ""
    amount.value = ""
}
</script>

<template>
    <h3>Add new transaction</h3>
    <form id="form" @submit.prevent="add">
        <div class="form-control">
            <label for="text">Description</label>
            <input v-model="descritpion" type="text" id="text" placeholder="Enter a description...">
        </div>
        <div class="form-control">
            <label for="amount">Amount</label>
            <input v-model="amount" type="number" id="amount" placeholder="Enter amount...(-expense, +income)">
        </div>
        <button type="submit" class="btn">Add transaction</button>
    </form>
</template>