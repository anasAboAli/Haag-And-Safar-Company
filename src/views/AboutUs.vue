<template>
  <div class="page about-us-page hero-gradient">
    <div class="content-wrapper animate-fade-in">
      <div class="section-header">
        <h1 class="hero-title">تعرف <span class="text-gradient">علينا</span></h1>
        <p class="section-desc">نحن رفقاء دربك في اكتشاف أجمل بقاع الأرض.</p>
      </div>

      <div class="about-grid">
        <div class="glass-card info-card">
          <h2>من نحن؟</h2>
          <p>شركة واندرلوست هي شركة رائدة في مجال السياحة والسفر، تخصصت منذ انطلاقتها في عام 2012 بتقديم تجارب سفر استثنائية تجمع بين الرفاهية والمغامرة. نحن نؤمن أن السفر ليس مجرد انتقال من مكان لآخر، بل هو رحلة لاكتشاف الذات وصناعة ذكريات لا تنسى.</p>
        </div>

        <div class="glass-card info-card">
          <h2>رؤيتنا</h2>
          <p>نسعى لأن نكون الخيار الأول للمسافر العربي الذي يبحث عن التميز والخصوصية، من خلال ابتكار برامج سياحية تتجاوز التوقعات، مع الالتزام بأعلى معايير الجودة والأمان.</p>
        </div>

        <div class="glass-card info-card">
          <h2>لماذا نحن؟</h2>
          <ul class="features-list">
            <li>✅ خبرة تمتد لأكثر من 12 عاماً في السوق العالمي.</li>
            <li>✅ طاقم عمل متخصص ومستشارو سفر على مدار الساعة.</li>
            <li>✅ شراكات حصرية مع أرقى الفنادق والمنتجعات العالمية.</li>
            <li>✅ برنامج خاص للحج والعمرة بإشراف كوادر مؤهلة.</li>
          </ul>
        </div>

        <div class="glass-card info-card">
          <h2>قيمنا</h2>
          <p>الشفافية، المصداقية، والابتكار المستمر في تقديم الخدمات. نحن نضع العميل في قلب كل ما نفعل، ونحرص على أدق التفاصيل لضمان راحتكم.</p>
        </div>
      </div>

      <div class="team-section">
        <h2 class="section-title">فريقنا</h2>
        <div class="team-grid">
          <div v-for="i in 3" :key="i" class="glass-card team-card">
            <div class="team-img-placeholder">
              <img :src="`/public/images/person${i}.webp`" alt="">
            </div>
            <h3>عضو الفريق {{ i }}</h3>
            <p>{{ teamMembers[i - 1].position }}</p>
          </div>
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

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 80px;
}

.info-card {
  padding: 40px;
}

.info-card h2 {
  color: var(--primary);
  margin-bottom: 20px;
  font-size: 1.8rem;
}

.info-card p {
  line-height: 1.8;
  color: var(--text-muted);
}

.features-list {
  list-style: none;
  padding: 0;
}

.features-list li {
  margin-bottom: 12px;
  color: var(--text-muted);
}

.team-section {
  text-align: center;
  padding-bottom: 100px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
}

.team-card {
  padding: 30px;
  transition: transform 0.3s ease;
}

.team-card:hover { transform: translateY(-10px); }

.team-img-placeholder {
  width: 100px;
  height: 100px;
  background: var(--glass-bg);
  border-radius: 50%;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  border: 1px solid var(--glass-border);
}

.team-img-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; }
  .team-grid { grid-template-columns: 1fr; }
}
</style>


<script>
export default {
  name: "AboutUs",
  data() {
    return {
      teamMembers: [
        {
          position: "مستشار تأشيرات وسفر",
          image: "/public/images/person1.webp",
        },
        {
          position: "مستشار حجوزات",
          image: "/public/images/person2.webp",
        },
        {
          position: "مستشار تجربة العملاء",
          image: "/public/images/person3.webp",
        },
      ],
    };
  },
}
</script>