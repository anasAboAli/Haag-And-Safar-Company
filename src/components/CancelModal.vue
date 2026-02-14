<template>
  <Transition name="fade">
    <div v-if="isOpen" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-container glass-card animate-scale-up">
        <div class="modal-header">
          <h2 class="text-gradient">سياسة الإلغاء</h2>
          <button class="close-btn" @click="$emit('close')">&times;</button>
        </div>
        
        <div class="modal-body custom-scrollbar">
          <div class="intro-section">
            <p>في واندرلوست، نعلم أن خطط السفر قد تتغير أحيانًا، لذلك وضعنا سياسة إلغاء واضحة ومرنة لتسهيل تجربة العملاء.</p>
          </div>

          <div class="info-highlights">
            <ul class="content-list">
              <li>
                <span class="icon">🔄</span>
                <p>يمكنك تعديل أو إلغاء حجزك بسهولة وفق المواعيد والشروط الموضحة عند كل رحلة.</p>
              </li>
              <li>
                <span class="icon">💰</span>
                <p>نوفر خيارات استرداد عادلة تساعدك على تخطيط رحلتك بأمان وراحة بال.</p>
              </li>
              <li>
                <span class="icon">🛡️</span>
                <p>هدفنا هو ضمان مرونة عالية وتجربة خالية من القلق، حتى في حال تغير خططك.</p>
              </li>
            </ul>
          </div>

          <div class="footer-note">
            <p>مع واندرلوست، رحلتك تبدأ بثقة وراحة بال، ونحن هنا لدعمك في كل خطوة من خطوات السفر.</p>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-primary" @click="$emit('close')">فهمت السياسة</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "CancelModal",
  props: { isOpen: Boolean },
  emits: ['close'],
  watch: {
    isOpen(val) { document.body.style.overflow = val ? 'hidden' : ''; }
  }
}
</script>

<style scoped>
@import "./modal-shared.css";
.icon { background: rgba(244, 63, 94, 0.1); color: #f43f5e; }
.footer-note { border-right-color: #f43f5e; background: linear-gradient(90deg, rgba(244, 63, 94, 0.1) 0%, transparent 100%); }
.btn-primary { background: linear-gradient(135deg, #f43f5e, #fb7185); }
</style>
