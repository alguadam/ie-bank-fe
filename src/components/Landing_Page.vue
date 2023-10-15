<template>
    <div class="landing-page">
        <header>
            <!-- Navigation bar -->
            <div class="header-img">
                <img src="../assets/header_cut.png" alt="">
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="/skull">Skull</a></li>
                    <li><a href="/accounts">Accounts</a></li>
                </ul>
            </nav>
        </header>

        <main>
            <!-- Hero section -->
            <section class="hero">
                <h1>Welcome to IE Bank Corp</h1>
                <p>Secure, reliable, and convenient banking services for all your financial needs.</p>
                <button>Open an Account</button>
            </section>

            <!-- Features section -->
            <section class="features">
                <div class="feature">
                    <i class="fas fa-shield-alt"></i>
                    <h2>Secure</h2>
                    <p>Your money is safe with us. We use the latest security measures to protect your account.</p>
                </div>
                <div class="feature">
                    <i class="fas fa-clock"></i>
                    <h2>Convenient</h2>
                    <p>Bank with us anytime, anywhere. Our online and mobile banking services make it easy to manage your money.</p>
                </div>
                <div class="feature">
                    <i class="fas fa-hand-holding-usd"></i>
                    <h2>Reliable</h2>
                    <p>Count on us to be there when you need us. Our experienced team is dedicated to providing exceptional customer service.</p>
                </div>
            </section>

            <!-- Testimonials section -->
            <section class="testimonials">
                <h2>What Our Customers Say</h2>
                <div class="testimonial">
                    <p>"I've been a customer for years and I couldn't be happier with the service I've received. The staff is friendly and knowledgeable, and the online banking platform is easy to use."</p>
                    <cite>John Doe</cite>
                </div>
                <div class="testimonial">
                    <p>"I recently opened a new account and the process was quick and painless. The staff was helpful and answered all my questions."</p>
                    <cite>Jane Smith</cite>
                </div>
            </section>
        </main>
    </div>
</template>

<style>
/* Overall Page Styling */
.landing-page {
    font-family: 'Arial', sans-serif;
    background-color: #f9f9f9;
    color: #333;
    margin: 0;
    padding: 0;
}

/* Header Styling */
header {
    background-color: #2c3e50;
    padding: 1rem 0;
}

.header-img {
    width: 100%;
    height: 100px;
    padding: 10px;
}
.header-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
}

nav a {
    text-decoration: none;
    color: #ecf0f1;
    padding: 0.5rem 1rem;
    transition: background-color 0.3s;
}

nav a:hover {
    background-color: #34495e;
    border-radius: 5px;
}

/* Hero Section Styling */
.hero {
    text-align: center;
    padding: 5rem 2rem;
    background-color: #ecf0f1;
}

.hero h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.hero p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
}

button {
    padding: 0.75rem 1.5rem;
    background-color: #3498db;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #2980b9;
}

/* Features Section Styling */
.features {
    display: flex;
    justify-content: space-around;
    padding: 3rem 2rem;
    background-color: #f9f9f9;
}

.feature {
    width: 30%;
    text-align: center;
}

.feature i {
    font-size: 3rem;
    margin-bottom: 1rem;
}

/* Testimonials Section Styling */
.testimonials {
    padding: 3rem 2rem;
    background-color: #ecf0f1;
}

.testimonial {
    margin-bottom: 2rem;
}

.testimonial cite {
    display: block;
    margin-top: 1rem;
    font-style: normal;
    color: #8e44ad;
}

</style>
