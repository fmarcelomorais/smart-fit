
export function statusUnit(opened){
    const status = opened ? "Aberto":"Fechado";
    return status

}

export function clearString(info){
    if(info)
        return info.replace('<p>','')
            .replace('</p>','')
            .replace('<br>','')
            .replace('&#8211','')
            .replace('\n','')
}

export function statusAccessoriesMask(statusVerify, listOfAccessories){
    const status = listOfAccessories.filter((status) => status.mask === statusVerify)
    return status
}
export function statusAccessoriesTowel(statusVerify, listOfAccessories){
    const status = listOfAccessories.filter((status) => status.towel === statusVerify)
    return status
}
export function statusAccessoriesLockerroom(statusVerify, listOfAccessories){
    const status = listOfAccessories.filter((status) => status.fountain === statusVerify)
    return status
}
export function statusAccessoriesFountain(statusVerify, listOfAccessories){
    const status = listOfAccessories.filter((status) => status.locker_room === statusVerify)
    return status
}