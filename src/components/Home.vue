<template>
    <div class="Home">
      <div class="BlurredBackground"></div>
      <header>
        <h1>Welcome to IE Bank Corp</h1>
      </header>
      <section>
          <h2>Your money is safe with us</h2>
        </section>
      <main>
        <div class="login">
          <h3>Log in</h3>
        </div>
        <div class="buttons">
        <div class="admin">
          <router-link to="/Skull">
              <button>Admin</button>
          </router-link>
        </div>
        <div class="user">
          <router-link to="/Accounts">
              <button>User</button>
          </router-link>
        </div>
        </div>
      </main>
    </div>
  </template>


<style scoped>

.Home {
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  overflow: hidden;
}

.BlurredBackground {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/Bank.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: blur(3px); /* Adjust the blur amount */
  z-index: -1;
}


  .buttons {
    display: flex; /* Add flex display to the buttons container */
    margin: 0 auto;
    padding: 50px;
  }

  .buttons .admin,
  .buttons .user {
    margin-right: 20px; /* Add margin between the buttons */
  }

  button {
  margin-left: 50px;
  background-color: #5fbd6f;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 15px 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
  
  header {

    text-align: center;
    margin-top: 300px;
  }
  
  h1 {
    font-size: 4rem;
    color: white;
    font-family:Georgia, 'Times New Roman', Times, serif;
    border: 5px solid white;
    padding: 20px;
    margin: 0 auto;
    width: 60%;
  }
  
  main {
    font-size: 1.2rem;
    color: #666;
    padding-left: 500px;
  }
  
  section {
    margin-bottom: 20px;
  }
  
  h2 {
    text-align: center;
    font-size: 1.8rem;
    color: #fff;
    text-underline-offset: 10px;
    margin-left: 40px;

  }

  h3 {
    margin-left: 50px;
    font-size: 1.8rem;
    color: #fff;
    margin-left: 200px;
  }
  
  ul {
    list-style-type: disc;
    margin-left: 20px;
  }
  
  </style>