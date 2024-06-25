<script setup>
const props = defineProps({
    balance: {
        type: Number,
        required: true
    },
    income: {
        type: Number,
        required: true
    },
    expense: {
        type: Number,
        required: true
    },
})
</script>

<template>
    <h4>Balance</h4>
    <h1 id="balance">€{{ balance }}</h1>

    <div class="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p id="money-plus" class="money plus">€{{ income }}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p id="money-minus" class="money minus">€{{ expense }}</p>
        </div>
    </div>
</template>