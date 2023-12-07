<template>
    <div>
        <ArrowLeftIcon class="back" @click="goBack" />
      <h1>Send Money</h1>
      <div class="send-money-form">
        <label for="recipientAccount">Recipient's Account Number:</label>
        <input v-model="recipientAccount" type="text" id="recipientAccount" />
  
        <label for="amount">Amount:</label>
        <input v-model="amount"  id="amount" />
  
        <button @click="sendMoney">Send Money</button>
      </div>
  
      <h1>Transaction History</h1>
      <div v-if="transactions.length === 0">
        <p>No transactions found.</p>
      </div>
      <ul v-else>
        <li v-for="(transaction, index) in reversedTransactions" :key="index" class="transaction-item">
          {{ user.name }} sent ${{ transaction.amount }} to {{ transaction.receiver }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ArrowLeftIcon } from "@vue-hero-icons/outline";
  export default {
    components: {
    ArrowLeftIcon,
    },
    data() {
      return {
        user: {
          name: 'Joseph', 
        },
        transactions: [
        { receiver: 'User2', amount: 50 },
        { receiver: 'User2', amount: 50 },
        { receiver: 'User2', amount: 50 },
        { receiver: 'User2', amount: 50 },
        { receiver: 'User2', amount: 50 },
        { receiver: 'User2', amount: 50 },
        { receiver: 'User2', amount: 50 },
        { receiver: 'User2', amount: 50 },
        ],
        recipientAccount: '',
        amount: 0,
      };
    },
    methods: {

    goBack() {
        if (this.$router) {
        this.$router.push({ name: "Upage" });
        }
        },
      sendMoney() {
        // Validate input
        if (!this.recipientAccount || !this.amount || this.amount <= 0) {
          alert('Please enter valid recipient account number and amount.');
          return;
        }
  
        // Simulate sending money (you can replace this with your actual logic)
        this.transactions.push({
          sender: 'CurrentUser', // Assuming the logged-in user is the sender
          receiver: this.recipientAccount,
          amount: this.amount,
        });
  
        // Clear input fields after sending money
        this.recipientAccount = '';
        this.amount = 0;
      },
    },
    computed: {
      reversedTransactions() {
        // Use computed property to reverse the order of transactions
        return this.transactions.slice().reverse();
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 20px;
    color: #4caf50;
  }
  
  .send-money-form {
    max-width: 400px; 
    margin: 0 auto; 
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    margin-bottom: 50px;
  }
  
  .send-money-form label {
    font-size: 1.2rem;
    color: #4caf50;
    margin-bottom: 8px;
    display: block;
  }
  
  .send-money-form input {
    width: calc(100% - 20px); 
    padding: 10px;
    margin-bottom: 15px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .send-money-form button {
    background-color: #4caf50;
    color: #f0f0f0;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
    display: block;
    margin: 0 auto; /* Center the button */
  }
  
  .send-money-form button:hover {
    background-color: #45a049;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  .transaction-item {
    border-bottom: 1px solid #ccc;
    padding: 15px 0;
    font-size: 1.2rem;
    padding-left: 600px;
  }

  .back {
    margin-left: 40px;
    margin-top: 20px;
    cursor: pointer;
    color: #4caf50;
    font-size: 1.5rem;
  }
  </style>