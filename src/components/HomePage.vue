<template>
    <div class="home-page">
      <header>
        <h1>Welcome to IE Bank Corp</h1>
        <p>Where Your Financial Goals Come to Life</p>
      </header>
      <main>
        <p>
          Manage your bank accounts efficiently with our user-friendly web application.
        </p>
        <p>
            At IE Bank Corp, we are dedicated to providing you with exceptional financial solutions tailored to your unique needs. With a commitment to security, innovation, and personalized service, we empower you to achieve your financial dreams. Discover a world of convenience and trust with IE Bank Corp.
        </p>
        <router-link to="/accounts" class="btn">View Accounts</router-link>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>
  
  <style scoped>
  .home-page {
    text-align: center;
    padding: 20px;
  }
  
  header {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  main {
    font-size: 18px;
    margin-bottom: 20px;
  }
  
  .btn {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  