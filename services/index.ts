import { $axios } from '@/plugins/api';
console.log($axios, 'axios');
interface SERVE {
    serveOne: Function
}
interface OPTION {
    url:string,
    params: Object
}
export const HomeServe:SERVE = {
    serveOne:async ( Option:OPTION) => await $axios.$get(Option.url)
}