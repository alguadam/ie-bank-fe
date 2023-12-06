<template>
  <div>
    <ArrowLeftIcon class="back" @click="goBack" />
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input v-model="username" type="text" id="username" placeholder="Enter your username" required>
      <label for="password">Password:</label>
      <input v-model="password" type="password" id="password" placeholder="Enter your password" required>
      <button type="submit">Login</button>
    </form>
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
    login() {
      // Make a POST request to your backend API for user authentication
      axios.post("http://localhost:8080/userlogin",
        {
          username: this.username,
          password: this.password,
        }
      )
        .then(response => {
    // Handle the successful login response
        console.log(response.data); // Log the response for debugging

    // Check the response data and perform actions accordingly
    if (response.data.id) {
      // Assuming the server returns user ID upon successful login
      // You may want to store user information or authentication token
      // Redirect to another page or update the UI
      window.location.href = '/dashboard'; // Example redirect
    } else {
      // Handle unexpected response data
      console.error('Unexpected response data:', response.data);
    }
    })
      .catch(error => {
        // Handle login failure or errors
        console.error(error.response.data); // Log the error response for debugging
        // Show an error message or perform other actions as needed
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
  