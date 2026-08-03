import type { HhVacanciesResponse } from '#shared/types/hh'

// Прокси для api.hh.ru: hh требует заголовок User-Agent, который браузер
// выставить не может, поэтому запрос выполняется на сервере.
export default defineCachedEventHandler(
  async () => {
    const { hhUserAgent } = useRuntimeConfig()

    try {
      return await $fetch<HhVacanciesResponse>('https://api.hh.ru/vacancies', {
        query: { employer_id: '4893760', per_page: '100' },
        headers: { 'User-Agent': hhUserAgent },
      })
    } catch (error) {
      const e = error as { response?: { status?: number; statusText?: string }; data?: unknown; message?: string }
      console.error(
        '[api/vacancies] hh.ru request failed. status:',
        e.response?.status,
        e.response?.statusText,
        'body:',
        e.data ?? e.message,
      )
      throw createError({ statusCode: 502, statusMessage: 'Failed to fetch vacancies from hh.ru' })
    }
  },
  { maxAge: 300 },
)
