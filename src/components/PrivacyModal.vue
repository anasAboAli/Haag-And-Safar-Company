<template>
  <Transition name="fade">
    <div v-if="isOpen" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-container glass-card animate-scale-up">
        <div class="modal-header">
          <h2 class="text-gradient">سياسة الخصوصية</h2>
          <button class="close-btn" @click="$emit('close')">&times;</button>
        </div>
        
        <div class="modal-body custom-scrollbar">
          <div class="intro-section">
            <p>
              في <span class="brand-highlight">واندرلوست</span>، نسعى لتقديم تجربة سفر مميزة وآمنة لكل عميل. ونحن نؤمن أن الخصوصية جزء أساسي من هذه التجربة. لذلك، نولي اهتمامًا بالغًا بحماية معلوماتك الشخصية، ونتعامل معها بكل أمان وشفافية.
            </p>
          </div>

          <div class="policy-highlights">
            <p class="section-subtitle">توضح سياسة الخصوصية لدينا كيف نقوم بجمع البيانات، واستخدامها، وحمايتها، بهدف:</p>
            
            <ul class="policy-list">
              <li>
                <span class="icon">🛡️</span>
                <p>ضمان تقديم خدمات سفر وسياحة سلسة وموثوقة.</p>
              </li>
              <li>
                <span class="icon">🗺️</span>
                <p>تسهيل الحجز وتنظيم رحلاتك بأفضل شكل ممكن.</p>
              </li>
              <li>
                <span class="icon">🔔</span>
                <p>التواصل معك بشأن العروض الخاصة والتحديثات المهمة.</p>
              </li>
              <li>
                <span class="icon">🔒</span>
                <p>حماية معلوماتك الشخصية من أي استخدام غير مصرح به.</p>
              </li>
            </ul>
          </div>

          <div class="footer-note">
            <p>
              في واندرلوست، الخصوصية ليست مجرد وعد، بل جزء من التزامنا بأن تكون رحلتك معنا ممتعة وآمنة من البداية للنهاية.
            </p>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-primary" @click="$emit('close')">فهمت ذلك</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "PrivacyModal",
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  emits: ['close'],
  watch: {
    isOpen(newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }
}
</script>

<style scoped>
@import "./modal-shared.css";
.brand-highlight {
  color: var(--primary);
  font-weight: 700;
}
.icon {
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary);
}
.policy-list li:hover {
  border-color: rgba(99, 102, 241, 0.3);
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: var(--primary);
}
</style>
