<template>
  <Transition name="fade">
    <div v-if="isOpen" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-container glass-card animate-scale-up">
        <div class="modal-header">
          <h2 class="text-gradient">مركز المساعدة</h2>
          <button class="close-btn" @click="$emit('close')">&times;</button>
        </div>
        
        <div class="modal-body custom-scrollbar">
          <div class="intro-section">
            <p>في واندرلوست، نحن نهتم بتجربة كل مسافر من البداية وحتى عودته بأمان وراحة.</p>
            <p class="section-subtitle">مركز المساعدة لدينا هو وجهتك السريعة لكل استفسار أو دعم تحتاجه، سواء كان يتعلق بـ:</p>
          </div>

          <div class="info-highlights">
            <ul class="content-list">
              <li>
                <span class="icon">✈️</span>
                <p>الحجز والتأكيد على الرحلات والفنادق 🏨</p>
              </li>
              <li>
                <span class="icon">🛂</span>
                <p>استفسارات عن التأشيرات أو الوثائق المطلوبة</p>
              </li>
              <li>
                <span class="icon">🔄</span>
                <p>التعديلات أو الإلغاء للحجوزات</p>
              </li>
              <li>
                <span class="icon">🌍</span>
                <p>نصائح حول الوجهات والأنشطة السياحية</p>
              </li>
            </ul>
          </div>

          <div class="footer-note">
            <p>فريقنا المتخصص جاهز دائمًا لتقديم إجابات سريعة وواضحة، لضمان أن تكون رحلتك مع واندرلوست سلسة وممتعة من البداية للنهاية.</p>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-primary" @click="$emit('close')">أحتاج مساعدة</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "HelpModal",
  props: { isOpen: Boolean },
  emits: ['close'],
  watch: {
    isOpen(val) { document.body.style.overflow = val ? 'hidden' : ''; }
  }
}
</script>

<style scoped>
@import "./modal-shared.css";
.icon { background: rgba(6, 182, 212, 0.1); color: #06b6d4; }
.footer-note { border-right-color: #06b6d4; background: linear-gradient(90deg, rgba(6, 182, 212, 0.1) 0%, transparent 100%); }
.btn-primary { background: linear-gradient(135deg, #06b6d4, var(--primary)); }
</style>
