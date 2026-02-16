<template>
  <div class="page tours-page hero-gradient">
    <div class="content-wrapper animate-fade-in">
      <div class="section-header">
        <h1 class="hero-title">وجهات <span class="text-gradient">حصرية</span></h1>
        <p class="section-desc">رحلات فاخرة مختارة بعناية للمسافر المتميز.</p>
      </div>

      <div class="filter-bar glass-card">
        <button v-for="cat in categories" :key="cat" 
                :class="['filter-btn', { active: currentCat === cat }]"
                @click="currentCat = cat">
          {{ cat }}
        </button>
      </div>
      
      <div class="tours-grid">
        <div v-for="tour in filteredTours" :key="tour.id" class="glass-card tour-card">
          <div class="tour-img-wrapper">
             <img :src="tour.image" :alt="tour.title" class="tour-img">
             <div class="tour-badge">{{ tour.type }}</div>
          </div>
          <div class="tour-info">
            <div class="tour-meta">
              <span>{{ tour.duration }}</span> • <span>{{ tour.location }}</span>
            </div>
            <h3>{{ tour.title }}</h3>
            <div class="tour-footer">
              <span class="price">{{ tour.price }}$ <small>/ للشخص</small></span>
              <button class="btn-primary-sm">التفاصيل</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const categories = ['الكل', 'شواطئ', 'جبال', 'مدن', 'حج وعمرة'];
const currentCat = ref('الكل');

const tours = ref([
  { id: 1, title: 'جنة المالديف', duration: '5 أيام', location: 'المالديف', price: 1299, image: '/images/tourImg1.webp', type: 'فاخرة', category: 'شواطئ' },
  { id: 2, title: 'هروب لجبال الألب', duration: '7 أيام', location: 'سويسرا', price: 2499, image: '/images/tourImg2.webp', type: 'مغامرة', category: 'جبال' },
  { id: 3, title: 'برنامج العمرة المميز', duration: '10 أيام', location: 'مكة والمكرمة', price: 1500, image: '/images/tourImg3.webp', type: 'ديني', category: 'حج وعمرة' },
  { id: 4, title: 'أضواء طوكيو', duration: '6 أيام', location: 'اليابان', price: 1899, image: '/images/tourImg4.webp', type: 'مدن', category: 'مدن' },
  { id: 5, title: 'سحر بورا بورا', duration: '5 أيام', location: 'بولينيزيا الفرنسية', price: 3200, image: '/images/tourImg5.webp', type: 'شهر عسل', category: 'شواطئ' },
  { id: 6, title: 'غروب سانتوريني', duration: '4 أيام', location: 'اليونان', price: 1599, image: '/images/tourImg6.webp', type: 'رائج', category: 'شواطئ' },
]);

const filteredTours = computed(() => {
  if (currentCat.value === 'الكل') return tours.value;
  return tours.value.filter(t => t.category === currentCat.value);
});
</script>

<style scoped>
.page {
  padding-top: calc(var(--nav-height) + 60px);
  min-height: 100vh;
}

.content-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5%;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.filter-bar {
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 15px;
  margin-bottom: 50px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 10px 24px;
  border-radius: 12px;
  border: 1px solid var(--glass-border);
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  transition: 0.3s;
  font-weight: 500;
}

.filter-btn:hover, .filter-btn.active {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.tours-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 100px;
}

.tour-card {
  overflow: hidden;
  transition: transform 0.3s ease;
}

.tour-card:hover { transform: translateY(-10px); }

.tour-img-wrapper {
  height: 250px;
  position: relative;
  overflow: hidden;
}

.tour-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s;
}

.tour-card:hover .tour-img { transform: scale(1.1); }

.tour-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(8px);
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
}

.tour-info { padding: 24px; }

.tour-meta {
  font-size: 0.8rem;
  color: var(--primary);
  margin-bottom: 10px;
  font-weight: 600;
  text-transform: uppercase;
}

.tour-info h3 { margin-bottom: 20px; font-size: 1.3rem; }

.tour-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price { font-size: 1.4rem; font-weight: 700; }
.price small { font-size: 0.8rem; color: var(--text-muted); }

.btn-primary-sm {
  padding: 8px 20px;
  background: var(--primary);
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  font-weight: 600;
}

@media (max-width: 1100px) { .tours-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 700px) { .tours-grid { grid-template-columns: 1fr; } }
</style>
