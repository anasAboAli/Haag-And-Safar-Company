<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero hero-gradient">
      <div class="hero-content animate-fade-in">
        <h1 class="hero-title">اكتشف <span class="text-gradient">كنوز العالم</span> الخفية</h1>
        <p class="hero-subtitle">استمتع بتجربة سفر فاخرة مصممة خصيصاً لتناسب تطلعاتك. من الشواطئ الهادئة إلى الجبال المهيبة، نصنع لك ذكريات تدوم مدى الحياة.</p>
        <div class="hero-actions">
          <router-link to="/tours" class="btn-primary" style="text-decoration: none;">استكشف الوجهات</router-link>
          <router-link to="/about" class="btn-secondary" style="text-decoration: none;">شاهد قصتنا</router-link>
        </div>
      </div>
      
      <div class="hero-visual">
        <div class="visual-blob"></div>
        <img src="/public/images/heroImg.webp" alt="Beautiful Destination" class="hero-img">
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
      <div class="glass-card stats-grid">
        <div class="stat-item">
          <h3>+200</h3>
          <p>وجهة سياحية</p>
        </div>
        <div class="stat-item">
          <h3>+15k</h3>
          <p>مسافر سعيد</p>
        </div>
        <div class="stat-item">
          <h3>12</h3>
          <p>عاماً من الخبرة</p>
        </div>
        <div class="stat-item">
          <h3>99%</h3>
          <p>نسبة الرضا</p>
        </div>
      </div>
    </section>

    <!-- Featured Tours -->
    <section class="featured">
      <div class="section-header">
        <h2 class="section-title">الوجهات الأكثر رواجاً</h2>
        <p class="section-desc">تجارب مختارة بعناية للمستكشف المعاصر</p>
      </div>
      
      <div class="tours-grid">
        <div v-for="i in 3" :key="i" class="glass-card tour-card">
          <div class="tour-img-wrapper">
             <img :src="`/public/images/pic${i}.webp`" alt="Tour" class="tour-img">
             <div class="tour-badge">الأعلى تقييماً</div>
          </div>
          <div class="tour-info">
            <h3>{{ i === 1 ? 'جزر المالديف' : i === 2 ? 'جبال الألب، سويسرا' : 'ساحر دبي' }}</h3>
            <p>5 أيام • منتجع فاخر • شامل كلياً</p>
            <div class="tour-footer">
              <span class="price">1,299$ <small>/ للشخص</small></span>
              <button class="btn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Home logic can be added here
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 100px 8%;
  gap: 50px;
}

.hero-content {
  flex: 1;
  max-width: 600px;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 24px;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  margin-bottom: 40px;
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: 20px;
}

.btn-secondary {
  display: inline-block;
  text-decoration: none;
  text-align: center;
  padding: 12px 28px;
  background: transparent;
  color: white;
  border-radius: 14px;
  border: 1px solid var(--glass-border);
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.btn-secondary:hover {
  background: var(--glass-bg);
}

.hero-visual {
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-img {
  width: 100%;
  max-width: 500px;
  height: 600px;
  object-fit: cover;
  border-radius: 40px;
  z-index: 2;
  box-shadow: 0 50px 100px -20px rgba(0,0,0,0.5);
}

.visual-blob {
  position: absolute;
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, var(--primary-glow) 0%, transparent 70%);
  z-index: 1;
  animation: pulse 10s infinite alternate;
}

@keyframes pulse {
  0% { transform: scale(1) translate(0, 0); }
  100% { transform: scale(1.1) translate(20px, -20px); }
}

.stats {
  padding: 0 8% 100px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 40px;
  text-align: center;
}

.stat-item h3 {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 5px;
}

.stat-item p {
  color: var(--text-muted);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.featured {
  padding: 0 8% 100px;
}

.section-header {
  margin-bottom: 50px;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.section-desc {
  color: var(--text-muted);
}

.tours-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.tour-card {
  overflow: hidden;
  transition: transform 0.3s ease;
}

.tour-card:hover {
  transform: translateY(-10px);
}

.tour-img-wrapper {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.tour-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.tour-card:hover .tour-img {
  transform: scale(1.1);
}

.tour-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(8px);
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
}

.tour-info {
  padding: 24px;
}

.tour-info h3 {
  margin-bottom: 8px;
  font-size: 1.25rem;
}

.tour-info p {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.tour-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-main);
}

.price small {
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--text-muted);
}

.btn-icon {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: var(--primary);
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s;
}

.btn-icon:hover {
  transform: scale(1.1);
}

@media (max-width: 1024px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding-top: 150px;
  }
  .hero-actions { justify-content: center; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 30px; }
  .tours-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .stats-grid { grid-template-columns: 1fr; }
  .tours-grid { grid-template-columns: 1fr; }
}
</style>
