import { ref } from 'vue'

export default async function useFetch(url) {
  const data = ref(null)
  const error = ref(null)

  try {
    let response = await fetch(url)
    data.value = await response.json()
  } catch (error) {
    error.value = error.message
  }

  return { data, error }
}
