<template>
  <Transition name="fade">
    <div v-if="isOpen" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-container glass-card animate-scale-up">
        <div class="modal-header">
          <h2 class="text-gradient">شروط الخدمة</h2>
          <button class="close-btn" @click="$emit('close')">&times;</button>
        </div>
        
        <div class="modal-body custom-scrollbar">
          <div class="intro-section">
            <p>في واندرلوست، هدفنا هو تقديم تجربة سفر مريحة وآمنة لكل عميل. لذلك، وضعت شروط الخدمة لتوضيح الحقوق والواجبات:</p>
          </div>

          <div class="info-highlights">
            <ul class="content-list">
              <li>
                <span class="icon">📜</span>
                <p>تشرح شروط الخدمة كيفية استخدام الموقع والخدمات السياحية التي نقدمها.</p>
              </li>
              <li>
                <span class="icon">⚖️</span>
                <p>توضح حقوق ومسؤوليات كل من العملاء وواندرلوست لضمان تجربة عادلة وشفافة.</p>
              </li>
              <li>
                <span class="icon">⚙️</span>
                <p>تشمل السياسات المتعلقة بالحجوزات، الدفع، التعديلات، الإلغاء، واستخدام المحتوى.</p>
              </li>
              <li>
                <span class="icon">✨</span>
                <p>هدفنا أن تكون كل تجربة واضحة، آمنة، وخالية من أي لبس أو مفاجآت.</p>
              </li>
            </ul>
          </div>

          <div class="footer-note">
            <p>باتباع شروط الخدمة، نضمن لك رحلة سلسة وموثوقة من الحجز وحتى العودة من السفر.</p>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-primary" @click="$emit('close')">أوافق على الشروط</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "TermsModal",
  props: { isOpen: Boolean },
  emits: ['close'],
  watch: {
    isOpen(val) { document.body.style.overflow = val ? 'hidden' : ''; }
  }
}
</script>

<style scoped>
@import "./modal-shared.css";
.icon { background: rgba(245, 158, 11, 0.1); color: #f59e0b; }
.footer-note { border-right-color: #f59e0b; background: linear-gradient(90deg, rgba(245, 158, 11, 0.1) 0%, transparent 100%); }
.btn-primary { background: linear-gradient(135deg, #f59e0b, #d97706); }
</style>
