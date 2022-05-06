import http from "k6/http";
import { check, sleep } from 'k6';

export let options = {
    stages: [
        {target: 5, duration: "30s"}
    ]
}

export default function(){
    let res = null;
    res = http.get("https://pokeapi.co/api/v2/pokemon/ditto")
    
    check(res , {'response code was 200': (res) => res.status == 200})

    sleep(1);
}