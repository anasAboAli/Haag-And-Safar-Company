<template>
  <nav :class="['navbar', { 'navbar-scrolled': isScrolled }]">
    <div class="nav-container">
      <div class="logo">
        <span class="logo-text">واندر<span class="text-accent">لوست</span></span>
      </div>
      
      <div class="nav-links" :class="{ 'mobile-active': isMobileMenuOpen }">
        <router-link to="/" @click="closeMenu">الرئيسية</router-link>
        <router-link to="/about-us" @click="closeMenu">تعرف علينا</router-link>
        <router-link to="/tours" @click="closeMenu">الوجهات</router-link>
        <router-link to="/about" @click="closeMenu">قصتنا</router-link>
        <router-link to="/contact" @click="closeMenu">اتصل بنا</router-link>
        <button class="btn-primary login-btn">احجز الآن</button>
      </div>

      <div class="menu-toggle" @click="toggleMenu">
        <div class="bar" :class="{ 'animate': isMobileMenuOpen }"></div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMenu = () => {
  isMobileMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--nav-height);
  display: flex;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  padding: 0 5%;
}

.navbar-scrolled {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  height: 70px;
  border-bottom: 1px solid var(--glass-border);
}

.nav-container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-text {
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: -1px;
  font-family: 'Outfit', sans-serif;
}

.text-accent {
  color: var(--primary);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 40px;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-main);
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  opacity: 0.8;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--primary);
  opacity: 1;
}

.login-btn {
  padding: 10px 24px;
  font-size: 0.9rem;
}

.menu-toggle {
  display: none;
  cursor: pointer;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    height: 100vh;
    background: var(--background);
    flex-direction: column;
    justify-content: center;
    transition: 0.4s;
    gap: 30px;
  }

  .nav-links.mobile-active {
    right: 0;
    box-shadow: -10px 0 30px rgba(0,0,0,0.5);
  }

  .bar {
    width: 25px;
    height: 2px;
    background: white;
    position: relative;
    transition: 0.3s;
  }

  .bar::before, .bar::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 2px;
    background: white;
    transition: 0.3s;
  }

  .bar::before { transform: translateY(-8px); }
  .bar::after { transform: translateY(8px); }

  .bar.animate { background: transparent; }
  .bar.animate::before { transform: rotate(45deg); }
  .bar.animate::after { transform: rotate(-45deg); }
}
</style>
