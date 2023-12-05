<template>
    <div class="login-container">
      <form @submit.prevent="login" class="login-form">
        <h1>Admin Login</h1>
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="form-group">
          <!-- Render router-link conditionally based on login status -->
          <button v-if="loggedIn" @click="navigateToAccounts" class="login-button">Login</button>
          <button v-else type="submit" class="login-button">Login</button>
        </div>
      </form>
      <p v-if="error" class="error-message">{{ error }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Skull',
    data() {
      return {
        username: '',
        password: '',
        error: '',
        loggedIn: false // Indicates the login status
      };
    },
    methods: {
      login() {
        const validUsername = 'marouane';
        const validPassword = 'devops';

        if (this.username === validUsername && this.password === validPassword) {
          // Allow login if username and password match
          this.msg = 'Hi! This is the skull component 💀'; // Set the message after successful login
          this.environment = 'admin'; // Set the environment to admin after successful login
          this.error = ''; // Clear any previous error message
          this.loggedIn = true; // Update login status to true
        } else {
          // Display error if credentials are invalid
        this.error = 'Invalid credentials. Please try again.';
        }
    },
      navigateToAccounts() {
        // Redirect to "/Accounts" route when logged in
        this.$router.push('/Accounts');
    }
    },
    created() {
      this.getSkull(); // Perform login check when component is created
    }
  };
  </script>
  
  <style scoped>
  /* Add your CSS styles for the login form */
  .login-container {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  
  .login-container h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
    color: #555;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    transition: border-color 0.3s ease;
  }
  
  input[type="text"]:focus,
  input[type="password"]:focus {
    outline: none;
    border-color: #007bff;
  }
  
  .login-button {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .login-button:hover {
    background-color: #0056b3;
  }
  
  .error-message {
    color: red;
    text-align: center;
    margin-top: 10px;
  }
  </style>