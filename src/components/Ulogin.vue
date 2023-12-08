<template>
  <div class="login-container">
    <form @submit.prevent="handleLogin" class="login-form">
      <h1>Login</h1>
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" placeholder="Username" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" placeholder="Password" required />
      </div>
      <div class="form-group">
        <!-- Render router-link conditionally based on login status -->
        <button v-if="loggedIn" @click="handleLogin" class="login-button">Login</button>
        <button v-else type="submit" class="login-button">Login</button>
      </div>
    </form>
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<script>
import { ArrowLeftIcon } from "@vue-hero-icons/outline";
import axios from "axios";

export default {
  name: "Ulogin",
  components: {
    ArrowLeftIcon,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    goBack() {
      if (this.$router) {
        this.$router.push({ name: "Home" });
      }
    },
    handleLogin() {
      const loginPayload = {
        name: this.username,
        password: this.password,
      };
      axios.post('https://team3-be-dev.azurewebsites.net/userlogin', loginPayload)
        .then(response => {
          const token = response.data.token;
          localStorage.setItem('userToken', token); // Store the token
          // Redirect or update UI
          if (this.$router){
            this.$router.push({name: 'Upage'});
          }
        })
        .catch(error => {
          console.error('Login failed:', error);
          // Handle error, show message to user
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
  </style>