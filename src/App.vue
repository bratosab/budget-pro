<script setup>
import Header from './components/Header.vue'
import Balance from './components/Balance.vue'
import Transactions from './components/Transactions.vue'
import AddTransaction from './components/AddTransaction.vue'
import { onMounted, onUpdated } from 'vue';
import { useBalance } from './composables/useBalance';

const { transactions, income, expense, balance } = useBalance()

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem('transactions'));
  if (savedTransactions) {
    transactions.value = savedTransactions;
  }
})

onUpdated(() => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value));
})

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
