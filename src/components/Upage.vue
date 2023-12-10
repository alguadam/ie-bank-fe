<template>
  <div class="user-profile">
    <h1 v-if="user">Welcome, {{ user }}!</h1>
    <div v-if="accounts.length === 0">
      <p>No bank accounts found.</p>
    </div>
    <div v-else>
      <CreditCardIcon />
      <div v-for="account in accounts" :key="account.id" class="account-box">
        <h2>Account {{ account.id }}</h2>
        <p>Balance: {{ account.balance }}</p>
        <p>Amount: {{ formData.amount }}</p>
        <p>Receiver: {{ formData.receiver }}</p>
      </div>

      <form @submit.prevent="submitTransaction">
        <label for="amount">Amount:</label>
        <input v-model="formData.amount" type="number" id="amount" step="0.01" required>

        <label for="receiver">Receiver's Username:</label>
        <input v-model="formData.receiver" type="text" id="receiver" required>

        <button type="submit">Submit Transaction</button>
      </form>

      <!-- Transaction History Section -->
      <div v-if="transactionHistory && transactionHistory.length > 0" class="transaction-container">
    <h2>Transaction History</h2>
    <div class="transaction-list">
        <div v-for="(transaction, index) in transactionHistory.slice().reverse()" :key="index" class="transaction-item">
            <div class="transaction-card">
                <div class="transaction-details">
                    <p><strong>Sender:</strong> {{ transaction.sender }}</p>
                    <p><strong>Receiver:</strong> {{ transaction.receiver }}</p>
                    <p><strong>Amount:</strong> {{ transaction.amount }}</p>
                    <!-- Add other relevant transaction details -->
                </div>
            </div>
        </div>
    </div>
</div>

      <!-- End of Transaction History Section -->
    </div>
  </div>
</template>

<script>
import { CreditCardIcon } from "@vue-hero-icons/outline";
import axios from "axios";

export default {
  name: 'Upage',
  components: {
    CreditCardIcon,
  },
  data() {
    return {
      user: {},
      accounts: [],
      formData: {
        amount: 0,
        receiver: "",
      },
      transactionHistory: [], // Initialize transactionHistory as an empty array
    };
  },
  created() {
    const username = this.$route.params.username;
    this.fetchUserData(username);
    this.fetchTransactionHistory(username);
  },
  methods: {
    submitTransaction() {
      const load = {
        name: this.$route.params.username,
        amount: this.formData.amount,
        receiver: this.formData.receiver
      };

      axios.post('http://127.0.0.1:5000/transaction', load)
        .then(response => {
          console.log(response.data);
          // Update transaction history after a successful transaction
          this.fetchTransactionHistory(this.$route.params.username);
          // Reset form data after successful submission
          this.formData = {
            amount: 0,
            receiver: "",
          };
        })
        .catch(error => {
          console.error('Error submitting transaction:', error);
        });
    },
    fetchUserData(username) {
      axios.get(`http://127.0.0.1:5000/upage/${username}`)
        .then(response => {
          this.user = response.data.name;
          this.accounts = response.data.accounts || [];
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    },
    fetchTransactionHistory(username) {
      axios.get(`http://127.0.0.1:5000/transaction-history/${username}`)
        .then(response => {
          this.transactionHistory = response.data.transactions || [];
        })
        .catch(error => {
          console.error('Error fetching transaction history:', error);
        });
    },
  },
};
</script>


<style scoped>
/* Add your custom styles here */
form {
  max-width: 300px;
  margin: auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin-top: 10px;
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  width: 100%;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #45a049;
}

.signup {
  margin-top: 20px;
}

h2 {
  text-align: center;
  font-size: 3rem;
  text-underline-offset: 10px;
  margin-left: 40px;
  padding-bottom: 20px;
  color: #4caf50;
}

.back {
  margin-left: 40px;
  margin-top: 20px;
  cursor: pointer;
  color: #4caf50;
  font-size: 1.5rem;
}
/* Styling for the transaction history container */
.transaction-container {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Styling for the transaction list */
.transaction-list {
    display: flex;
    flex-direction: column;
}

/* Styling for each transaction item */
.transaction-item {
    margin-bottom: 20px;
}

/* Styling for transaction card */
.transaction-card {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
}

/* Styling for transaction details */
.transaction-detail {
    margin: 8px 0;
    font-size: 16px;
    display: flex;
    align-items: center;
}

/* Styling for transaction detail labels */
.transaction-detail strong {
    font-weight: bold;
    margin-right: 8px;
}

</style>
