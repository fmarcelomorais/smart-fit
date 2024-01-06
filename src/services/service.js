export async function getUnits(){
    const url = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json";
    const request = await fetch(url, {
        method: 'GET',
        headers : {
            'Content-Type':'application/json'
        }
    })
    const response = await request.json()
    const data = await response.locations
    return data
}

export async function search(set, search){
    const base = await getUnits()
    const data = await base.filter(  (unit)  =>  unit.opened !== search.showUnitClosed)
    await set(data);    
}
   
