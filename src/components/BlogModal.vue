<template>
  <Transition name="fade">
    <div v-if="isOpen" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-container glass-card animate-scale-up">
        <div class="modal-header">
          <h2 class="text-gradient">مدونة السفر والمغامرة</h2>
          <button class="close-btn" @click="$emit('close')">&times;</button>
        </div>
        
        <div class="modal-body custom-scrollbar">
          <div class="intro-section">
            <p>
              وجهتك المفضلة لكل ما يتعلق بالسفر والمغامرة! <span class="emoji">🌍</span>
            </p>
            <p class="section-subtitle">هنا نشارك معك كل ما هو جديد ومفيد في عالم السفر:</p>
          </div>

          <div class="blog-highlights">
            <ul class="content-list">
              <li>
                <span class="icon">🏝️</span>
                <p>أفضل الوجهات السياحية حول العالم، من الجزر الخلابة إلى المدن النابضة بالحياة.</p>
              </li>
              <li>
                <span class="icon">💡</span>
                <p>نصائح سفر عملية لتسهيل رحلاتك وجعل كل تجربة مريحة وممتعة.</p>
              </li>
              <li>
                <span class="icon">📖</span>
                <p>قصص وتجارب سفر ملهمة لتلهمك وتفتح لك آفاقًا جديدة.</p>
              </li>
              <li>
                <span class="icon">🏷️</span>
                <p>عروض وحزم سياحية مميزة تساعدك على الاستمتاع برحلتك بأفضل الأسعار.</p>
              </li>
            </ul>
          </div>

          <div class="footer-note">
            <p>
              في واندرلوست، نؤمن أن كل رحلة هي فرصة لاكتشاف جديد، ونحن هنا لنرشدك ونلهمك لتعيش مغامرتك بأمان ومتعة.
            </p>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-primary" @click="$emit('close')">بدء الاستكشاف</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "BlogModal",
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
.icon {
  background: rgba(168, 85, 247, 0.1);
  color: var(--secondary);
}
.content-list li:hover {
  border-color: rgba(168, 85, 247, 0.3);
}
.footer-note {
  background: linear-gradient(90deg, rgba(168, 85, 247, 0.1) 0%, transparent 100%);
  border-right-color: var(--secondary);
}
.btn-primary {
  background: linear-gradient(135deg, var(--secondary), var(--primary));
}
.emoji {
  display: inline-block;
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
</style>
