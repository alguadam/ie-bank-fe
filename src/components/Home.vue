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
            <button>
              <UserGroupIcon class="icon" />
              Admin
            </button>
          </router-link>
        </div>
        <div class="user">
          <router-link to="/userlogin">
            <button>
              <UserIcon class="icon" />
              User
            </button>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { UserGroupIcon, UserIcon } from "@vue-hero-icons/outline";

export default {
  components: {
    UserGroupIcon,
    UserIcon,
  },
};
</script>

<style scoped>
body, html {
  overflow: hidden !important;
  margin: 0 !important;
  padding: 0 !important;
  height: 100% !important;
}

.Home {
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  overflow: hidden !important;
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
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.buttons .admin,
.buttons .user {
  margin-right: 20px;
}

button {
  background-color: #5fbd6f;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 15px 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #4ca75a;
}

header {
  text-align: center;
  margin-top: 100px;
}

h1 {
  font-size: 3rem;
  color: white;
  font-family: Georgia, 'Times New Roman', Times, serif;
  border: 5px solid white;
  padding: 20px;
  margin: 0 auto;
  width: 60%;
}

main {
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  margin-top: 50px;
}

section {
  margin-bottom: 20px;
}

h2 {
  font-size: 1.8rem;
  color: #fff;
  text-underline-offset: 10px;
  padding-left: 550px;
}

h3 {
  font-size: 1.8rem;
  color: #fff;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}
</style>
