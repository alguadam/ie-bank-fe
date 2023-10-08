<template>
    <div id="app">
        <nav class="menu">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/accounts">Account Management</router-link></li>
            </ul>
        </nav>
        <header class="header" :style="{ backgroundImage: `url(${backgroundImage})` }">
            <h1>Welcome to IE Bank Corporation</h1>
        </header>
        <section class="section">
            <h2>Mission & Vision</h2>
            <p>Our mission is to provide high quality financial services...</p>
            <p>Our vision is to be the digital bank of the future...</p>
        </section>
        <section class="section">
            <h2>Services</h2>
            <ul>
                <li>Digital Banking</li>
                <li>Investment Management</li>
                <!-- Add more services as needed -->
            </ul>
        </section>
    </div>
</template>
  
<script>
export default {
    name: 'Home',
    data() {
        return {
            backgroundImage: require('../assets/images/header-background.jpg')
        }
    }
}

</script>
  
<style scoped>
body {
    font-family: Arial, sans-serif;
}

.menu {
    background-color: #333;
    overflow: hidden;
}

.menu ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.menu li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

.header {
    padding: 60px;
    text-align: center;
    color: white;
    background-image: "require(`./assets/images/header-background.png`)";
    background-size: cover;
}

.section {
    padding: 20px;
}

.section h2 {
    color: #1abc9c;
}
</style>
  