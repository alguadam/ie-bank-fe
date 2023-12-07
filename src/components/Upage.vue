<template>
    <div>
    <h1>Welcome, {{ user.name }}!</h1>
    <div v-if="user.accounts.length === 0">
        <p>No bank accounts found.</p>
    </div>
    <div v-else>
        <div v-for="account in user.accounts" :key="account.id" class="account-box" @click="accountpage">
            <CreditCardIcon />
            <h2>Account {{ account.id }}</h2>
            <p>Balance: {{ account.balance }}</p>
        </div>
    </div>
    </div>
</template>

<script>
import { CreditCardIcon } from "@vue-hero-icons/outline";
export default {
    components:{
        CreditCardIcon
    },
    data() {
    return {
        user: {
          name: 'John Doe', // Replace with actual user data
        accounts: [
            { id: 1, balance: 1000 },
            { id: 2, balance: 5000 },
            { id: 1, balance: 1000 },
            { id: 2, balance: 5000 },
            { id: 1, balance: 1000 },
            { id: 2, balance: 5000 },
            { id: 1, balance: 1000 },
            { id: 2, balance: 5000 },
            // Add more accounts as needed
        ],
        },
      };
    },
    methods: {
    accountpage() {
      if (this.$router) {
        this.$router.push({ name: "Uaccount" });
      }
    },
  }
};

  </script>
  
  <style scoped>

  
  h1 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 60px;
    color: #4caf50;
  }
  
  .account-box {
    width:300px;
    margin: auto;
    background-color: #4caf50;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 5);
    margin-bottom: 20px;
    transition: transform 0.3s ease-in-out;
    display: inline-block;
    margin-right: 20px;
    height: 300px;
    margin-left: 35px;
    margin-bottom: 40px;
}

.account-box:hover {
    transform: scale(1.2);
}

.account-box h2 {
    font-size: 2rem;
    color: #f0f0f0;
    margin-bottom: 10px;
}

.account-box p {
    margin-top: 10px;
    color: #f0f0f0;
    }


</style>