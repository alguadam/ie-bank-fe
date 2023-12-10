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
      </div>
      <form @submit.prevent="submitTransaction">
      <label for="amount">Amount:</label>
      <input v-model="formData.amount" type="number" id="amount" step="0.01" required>

      <label for="receiver">Receiver's Username:</label>
      <input v-model="formData.receiver" type="text" id="receiver" required>

      <button type="submit">Submit Transaction</button>
    </form>
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
        receiver: "",},
    };
  },
  created() {
    console.log(this.$route);
  const username = this.$route.params.username; // Correctly access the username parameter
  axios.get(`http://127.0.0.1:5000/upage/${username}`) // Pass the username to the API endpoint
    .then(response => {
      this.user = response.data.name; // Set the user data obtained from the API
      this.accounts = response.data.accounts || []; // Set accounts data
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
      // Handle error
    });
},
methods: {
    submitTransaction() {
      const load = {
        name: this.$route.params.username,
        amount: this.formData.amount,
        receiver: this.formData.receiver
      };
      
      console.log(this.$route.params.username)
      const apiUrl = 'http://127.0.0.1:5000/transaction/${this.$route.params.username}/${this.formData.amount}/${this.formData.receiver}';

      axios.post('http://127.0.0.1:5000/transaction', load)
        .then(response => {
          console.log(response.data);
          // Handle successful response
        })
        .catch(error => {
          console.error('Error submitting transaction:', error);
          // Handle error
        });
        window.location.reload()
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
  </style>