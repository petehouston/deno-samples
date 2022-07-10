const res = await fetch("https://ifconfig.me/all.json", {
    headers: {
        "User-Agent": "Pete Browser/1.0.1"
    }
});

const data = await res.json();

console.log(data);