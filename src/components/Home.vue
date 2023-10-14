<template>
    <div class="Home">
      <header>
        <h1>Welcome to IE Bank Corp</h1>
      </header>
      <main>
        <section>
          <h2>Your money is safe with us</h2>
        </section>
        <section>
          <h3>Our Services</h3>
        </section>

        <router-link to="/Skull">
            <button>Skull</button>
        </router-link>
        <router-link to="/Accounts">
            <button>Accounts</button>
        </router-link>

      </main>
    </div>
  </template>


  <style scoped>

  .home {
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
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
    margin-bottom: 20px;
  }
  
  h1 {
    font-size: 2.5rem;
    color: #000000;
  }
  
  main {
    font-size: 1.2rem;
    color: #666;
  }
  
  section {
    margin-bottom: 20px;
  }
  
  h2 {
    text-align: center;
    font-size: 1.8rem;
    color: #161838;
  }

  h3 {
    margin-left: 50px;
    font-size: 1.8rem;
    color: #444;
  }
  
  ul {
    list-style-type: disc;
    margin-left: 20px;
  }
  
  </style>