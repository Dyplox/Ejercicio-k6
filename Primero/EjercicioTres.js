import http from "k6/http";
import { check, sleep } from 'k6';

export let options = {
    stages: [
        {target: 20, duration: "30s"},
        {target: 2, duration: "30s"},
        {target: 0, duration: "10s"}
    ]
}

export default function(){
    let res = null;
    res = http.get("https://httpbin.test.k6.io")
    check(res , {'response code was 200': (res) => res.status == 200})

    sleep(1);
}