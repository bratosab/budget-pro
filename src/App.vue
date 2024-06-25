<script setup>
import Header from './components/Header.vue'
import Balance from './components/Balance.vue'
import Transactions from './components/Transactions.vue'
import AddTransaction from './components/AddTransaction.vue'
import { computed, ref } from 'vue';

const transactions = ref([]);
const income = ref(0);
const expense = ref(0);

const balance = computed(() => {
  income.value = 0
  expense.value = 0
  return transactions.value.reduce((total, transaction) => {
    if (transaction.amount > 0) {
      income.value += transaction.amount
    } else {
      expense.value += transaction.amount
    }
    return total + transaction.amount;
  }, 0);
});

function handleDeleteTransaction(id) {
  transactions.value = transactions.value.filter(
    (transaction) => transaction.id !== id
  );
}
function handleAddTransaction(transaction) {
  transactions.value.push(transaction)
}
</script>

<template>
  <Header />
  <div class="container">
    <Balance :balance="balance" :income="income" :expense="expense" />
    <Transactions :transactions="transactions" @delete="handleDeleteTransaction" />
    <AddTransaction @add="handleAddTransaction" />
  </div>
</template>

<style scoped></style>
