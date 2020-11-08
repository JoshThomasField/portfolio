async function getData(APIpath: string) {
    let data = await fetch(APIpath);
    return data.json();
}