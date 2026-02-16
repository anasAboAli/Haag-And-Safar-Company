<template>
  <div class="page about-page hero-gradient">
    <div class="content-wrapper animate-fade-in">
      <div class="about-grid">
        <div class="about-visual">
          <div class="image-stack">
            <img src="/images/img1About.webp" alt="Travel" class="img-1">
            <img src="/images/img2About.webp" alt="Adventure" class="img-2 glass-card">
          </div>
        </div>
        
        <div class="about-content">
          <span class="sub-title">قصتنا</span>
          <h1 class="hero-title">نصنع لك <span class="text-gradient">رحلات استثنائية</span></h1>
          <p>تأسست واندرلوست في عام 2012، وكانت في طليعة السفر الفاخر، حيث خدمت أكثر من 15,000 مغامر راضٍ. مهمتنا هي سد الفجوة بين الخيال والواقع.</p>
          
          <div class="features-list">
            <div class="feature-item">
              <div class="feature-icon">✨</div>
              <div>
                <h4>تجارب مخصصة</h4>
                <p>كل مسار رحلة فريد من نوعه، تماماً مثلك.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🌍</div>
              <div>
                <h4>شبكة عالمية</h4>
                <p>شركاء في أكثر من 50 دولة حول العالم.</p>
              </div>
            </div>
          </div>

          <router-link to="/about-us" class="btn-primary" style="text-decoration: none;">تعرف علينا أكثر</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

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

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  padding-bottom: 100px;
}

.image-stack {
  position: relative;
  height: 500px;
}

.img-1 {
  width: 80%;
  height: 400px;
  object-fit: cover;
  border-radius: 30px;
}

.img-2 {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 60%;
  height: 300px;
  object-fit: cover;
  border-radius: 30px;
  padding: 10px;
}

.sub-title {
  color: var(--primary);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 15px;
}

.about-content p {
  color: var(--text-muted);
  margin-bottom: 30px;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;
}

.feature-item {
  display: flex;
  gap: 20px;
}

.feature-icon {
  width: 50px;
  height: 50px;
  background: var(--glass-bg);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.feature-item h4 { margin-bottom: 5px; }

@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; gap: 40px; }
  .image-stack { height: 400px; }
}
</style>
