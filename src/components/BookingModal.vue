<template>
  <Transition name="fade">
    <div v-if="isOpen" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-container glass-card animate-scale-up">
        <div class="modal-header">
          <h2 class="text-gradient">دليل الحجز</h2>
          <button class="close-btn" @click="$emit('close')">&times;</button>
        </div>
        
        <div class="modal-body custom-scrollbar">
          <div class="intro-section">
            <p>في واندرلوست، نسعى لجعل تجربة حجز رحلتك سريعة، سهلة، وخالية من التعقيدات.</p>
            <p class="section-subtitle">دليل الحجز لدينا يرشدك خطوة بخطوة خلال كل عملية:</p>
          </div>

          <div class="info-highlights">
            <ul class="content-list">
              <li>
                <span class="icon">✈️</span>
                <p>اختيار الوجهة المثالية لرحلتك القادمة</p>
              </li>
              <li>
                <span class="icon">🏨</span>
                <p>تحديد مواعيد السفر وأفضل الفنادق المتاحة</p>
              </li>
              <li>
                <span class="icon">🌍</span>
                <p>اختيار الأنشطة والجولات السياحية المميزة</p>
              </li>
              <li>
                <span class="icon">💳</span>
                <p>استكمال عملية الدفع بأمان وسهولة تامة</p>
              </li>
            </ul>
          </div>

          <div class="footer-note">
            <p>سواء كنت مسافر لأول مرة أو من عشاق الرحلات، فإن دليل الحجز يضمن لك رحلة منظمة وممتعة مع نصائح عملية لتوفير الوقت.</p>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-primary" @click="$emit('close')">ابدأ الحجز الآن</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "BookingModal",
  props: { isOpen: Boolean },
  emits: ['close'],
  watch: {
    isOpen(val) { document.body.style.overflow = val ? 'hidden' : ''; }
  }
}
</script>

<style scoped>
@import "./modal-shared.css";
.icon { background: rgba(16, 185, 129, 0.1); color: #10b981; }
.footer-note { border-right-color: #10b981; background: linear-gradient(90deg, rgba(16, 185, 129, 0.1) 0%, transparent 100%); }
.btn-primary { background: linear-gradient(135deg, #10b981, #059669); }
</style>
