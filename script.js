function day_to_night(selectorLists){
    selectorLists.forEach(selectorList => {
        selectorList.forEach(selector=>{
            if(selector !== document.getElementById('active')){
                selector.style.color = 'white';
            }
            selector.style.borderColor = 'white';
        });
    });
}
function night_to_day(selectorLists){
    selectorLists.forEach(selectorList =>{
        selectorList.forEach(selector => {
            if(selector !== document.getElementById('active')){
                selector.style.color = 'black';
            }
            selector.style.borderColor = 'black';
        });
    });
}