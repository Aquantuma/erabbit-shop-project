import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

export const lazyLoadFn = (apiFn) => {
  const target = ref(null)
  const result = ref([])
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        apiFn().then((data) => {
          result.value = data.result
        })
        stop()
      }
    }
  )
  return { target, result }
}
