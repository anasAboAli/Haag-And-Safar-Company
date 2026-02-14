<template>
  <div class="page contact-page hero-gradient">
    <div class="content-wrapper animate-fade-in">
      <div class="section-header">
        <h1 class="hero-title">تواصل <span class="text-gradient">معنا</span></h1>
        <p class="section-desc">خطط لمغامرتك القادمة مع خبراء السفر لدينا.</p>
      </div>
      
      <div class="contact-container">
        <div class="glass-card contact-info">
          <div class="info-item">
            <div class="icon-box">📍</div>
            <div>
              <h4>مكتبنا</h4>
              <p>123 طريق السفر، مدينة المغامرات</p>
            </div>
          </div>
          <div class="info-item">
            <div class="icon-box">📧</div>
            <div>
              <h4>راسلنا</h4>
              <p>hello@wanderlust.com</p>
            </div>
          </div>
          <div class="info-item">
            <div class="icon-box">📞</div>
            <div>
              <h4>اتصل بنا</h4>
              <p>+1 (234) 567-890</p>
            </div>
          </div>
        </div>

        <form @submit.prevent="handleSubmit" class="glass-card contact-form">
          <div class="form-group">
            <label>الاسم</label>
            <input type="text" v-model="form.name" placeholder="محمد أحمد" required />
          </div>
          <div class="form-group">
            <label>البريد الإلكتروني</label>
            <input type="email" v-model="form.email" placeholder="mohammed@example.com" required />
          </div>
          <div class="form-group">
            <label>الرسالة</label>
            <textarea v-model="form.message" rows="5" placeholder="أخبرنا عن رحلة أحلامك..." required></textarea>
          </div>
          <button type="submit" class="btn-primary" :disabled="loading">
            {{ loading ? 'جاري الإرسال...' : 'إرسال الرسالة' }}
          </button>
          <p v-if="success" class="success-msg">تم إرسال الرسالة بنجاح!</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const form = reactive({
  name: '',
  email: '',
  message: ''
});

const loading = ref(false);
const success = ref(false);

const handleSubmit = async () => {
  loading.value = true;
  try {
    await addDoc(collection(db, 'messages'), {
      ...form,
      createdAt: serverTimestamp()
    });
    success.value = true;
    form.name = '';
    form.email = '';
    form.message = '';
    setTimeout(() => success.value = false, 5000);
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("Something went wrong. Please try again.");
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.page {
  padding-top: calc(var(--nav-height) + 60px);
  min-height: 100vh;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 40px;
  margin-bottom: 100px;
}

.contact-info {
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.info-item {
  display: flex;
  gap: 20px;
  align-items: center;
}

.icon-box {
  width: 50px;
  height: 50px;
  background: var(--glass-bg);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.info-item h4 {
  margin-bottom: 4px;
}

.info-item p {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.contact-form {
  padding: 40px;
}

.form-group {
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-muted);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  color: white;
  font-family: inherit;
  transition: 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary);
  background: rgba(255, 255, 255, 0.1);
}

.success-msg {
  color: #10b981;
  margin-top: 15px;
  font-size: 0.9rem;
}

@media (max-width: 900px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
}
</style>
