<template>
    <div class="landing-page">
        <header>
            <!-- Navigation bar -->
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
        </header>

        <main>
            <!-- Hero section -->
            <section class="hero">
                <h1>Welcome to Our Bank</h1>
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

        <footer>
            <!-- Footer content -->
            <p>&copy; 2021 Our Bank. All rights reserved.</p>
        </footer>
    </div>
</template>

<script>
import axios from 'axios'
export default
    {
        name: 'LandingPage',
        data() {
            return {
                msg: 'Landing page / Home page whatever pls work'
            }
        },
        methods:
        {
            getLand() {
                const path = `${process.env.VUE_APP_ROOT_URL}/`;
                axios.get(path)
                    .then((response) => {
                        this.msg = response.data;
                        this.environment = process.env.NODE_ENV;
                        this.env_var_file_name = process.env.VUE_APP_ENV_VAR_FILE_NAME
                    })
                    .catch(error => console.log(error))
            }
        },
        created() {
            this.getLand()
        }


    }
</script>

<style>
/* Styles for the landing page */
</style>
