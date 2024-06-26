import { computed, ref } from 'vue';

export function useBalance() {
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

    return { transactions, income, expense, balance }
}