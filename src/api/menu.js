import http from '@/axios/axios'

export function getmenuList() {
    return http({ url: '/menu' })
}