<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-grid">
        <div class="footer-brand">
          <span class="logo-text">واندر<span class="text-accent">لوست</span></span>
          <p class="brand-desc">بوابتك إلى أكثر الوجهات إثارة للإعجاب في العالم. نصنع الذكريات منذ عام 2012.</p>
          <div class="social-links">
            <a href="#" class="social-icon">إنستغرام</a> |
            <a href="#" class="social-icon">تويتر</a> |
            <a href="#" class="social-icon">فيسبوك</a>
          </div>
        </div>
        
        <div class="footer-links">
          <h4>استكشف</h4>
          <router-link to="/tours">الوجهات</router-link>
          <router-link to="/about">قصتنا</router-link>
          <a href="#" @click.prevent="showBlog = true">مدونة السفر</a>
          <a href="#" @click.prevent="showPrivacy = true">سياسة الخصوصية</a>
        </div>

        <div class="footer-links">
          <h4>الدعم</h4>
          <a href="#" @click.prevent="showHelp = true">مركز المساعدة</a>
          <a href="#" @click.prevent="showBooking = true">دليل الحجز</a>
          <a href="#" @click.prevent="showCancel = true">سياسة الإلغاء</a>
          <a href="#" @click.prevent="showTerms = true">شروط الخدمة</a>
        </div>

        <div class="footer-newsletter">
          <h4>النشرة الإخبارية</h4>
          <p>احصل على عروض سفر حصرية ونصائح مميزة.</p>
          <div class="newsletter-form">
            <input type="email" placeholder="البريد الإلكتروني">
            <button class="btn-primary-sm">اشترك</button>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2026 واندرلوست للسفر. جميع الحقوق محفوظة.</p>
      </div>
    </div>

    <!-- Modals -->
    <PrivacyModal :isOpen="showPrivacy" @close="showPrivacy = false" />
    <BlogModal :isOpen="showBlog" @close="showBlog = false" />
    <HelpModal :isOpen="showHelp" @close="showHelp = false" />
    <BookingModal :isOpen="showBooking" @close="showBooking = false" />
    <CancelModal :isOpen="showCancel" @close="showCancel = false" />
    <TermsModal :isOpen="showTerms" @close="showTerms = false" />
  </footer>
</template>

<script>
import PrivacyModal from './PrivacyModal.vue';
import BlogModal from './BlogModal.vue';
import HelpModal from './HelpModal.vue';
import BookingModal from './BookingModal.vue';
import CancelModal from './CancelModal.vue';
import TermsModal from './TermsModal.vue';

export default {
  name: "Footer",
  components: {
    PrivacyModal,
    BlogModal,
    HelpModal,
    BookingModal,
    CancelModal,
    TermsModal
  },
  data() {
    return {
      showPrivacy: false,
      showBlog: false,
      showHelp: false,
      showBooking: false,
      showCancel: false,
      showTerms: false
    }
  }
}
</script>

<style scoped>
.footer {
  background: #0a0f1d;
  padding: 80px 5% 40px;
  border-top: 1px solid var(--glass-border);
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
  gap: 60px;
  margin-bottom: 60px;
}

.logo-text { font-size: 1.5rem; font-weight: 800; }
.brand-desc { color: var(--text-muted); margin: 20px 0; font-size: 0.9rem; }

.footer-links h4, .footer-newsletter h4 {
  margin-bottom: 25px;
  font-size: 1.1rem;
}

.footer-newsletter button {
  background: var(--primary);
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.footer-newsletter button:hover {
  background: var(--primary-glow);
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links a {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
  transition: 0.3s;
}

.footer-links a:hover { color: var(--primary); }

.footer-newsletter p { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 20px; }

.newsletter-form {
  display: flex;
  gap: 10px;
}

.newsletter-form input {
  flex: 1;
  padding: 10px 15px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 8px;
  color: white;
}

.footer-bottom {
  border-top: 1px solid var(--glass-border);
  padding-top: 30px;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.85rem;
}

@media (max-width: 1024px) {
  .footer-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 640px) {
  .footer-grid { grid-template-columns: 1fr; }
}
</style>
