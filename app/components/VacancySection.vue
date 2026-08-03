<script setup lang="ts">
import type { HhVacanciesResponse } from '#shared/types/hh'

const { data, status } = await useFetch<HhVacanciesResponse>('/api/vacancies')

const vacancies = computed(() => data.value?.items ?? [])
</script>

<template>
  <section id="vacancy__tolink" class="vacancy">
    <h2 class="vacancy__title">Актуальные вакансии</h2>
    <p class="vacancy__text">Ваш путь начинается здесь.</p>
    <div class="container">
      <ul class="vacancy__ul">
        <li class="vacancy__ul-li">Будь вы фармацевтом, инженером, логистом или специалистом по продажам — у нас есть место для тех, кто хочет расти и влиять на качество жизни людей.</li>
        <li class="vacancy__ul-li">Просмотрите актуальные вакансии и найдите ту, что идеально подходит именно вам!</li>
      </ul>
    </div>
    <div id="vacancies" class="vacancies__box">
      <p v-if="status === 'pending' || status === 'idle'" class="vacancies__message">Загрузка вакансий…</p>
      <p v-else-if="status === 'error'" class="vacancies__message vacancies__message--error">Произошла ошибка при загрузке вакансий. Пожалуйста, попробуйте позже.</p>
      <p v-else-if="vacancies.length === 0" class="vacancies__message">На данный момент нет открытых вакансий. Попробуйте позже!</p>
      <template v-else>
        <a
          v-for="vacancy in vacancies"
          :key="vacancy.id"
          class="vacancy__link"
          :href="vacancy.alternate_url"
          target="_blank"
          rel="noopener"
        >
          <h2>{{ vacancy.name }}</h2>
          <p>Подробнее</p>
        </a>
      </template>
    </div>
  </section>
</template>

<style scoped>
.vacancies__message {
  text-align: center;
  font-size: 18px;
  color: #777;
}
.vacancies__message--error {
  color: red;
}
</style>
