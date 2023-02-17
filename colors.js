var Body = {
    setColor : function(color){
        $('body').css('color', color);
    },
    setBackgroundColor : function(color){
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
};

//var darkStorage = window.localStorage;

// var referrer = document.referrer;   //이전 페이지 url
// var ref_dark_value = referrer.docu

function day_to_night(...selectorLists){
    Body.setColor('white');
    Body.setBackgroundColor('black');
    selectorLists.forEach(selectorList => {
        selectorList.forEach(selector=>{
            if(selector !== document.getElementById('active')){
                // selector.style.color = 'white';
                $(selector).css('color', 'white');
            }
            // selector.style.borderColor = 'white';
            $(selector).css('borderColor', 'white');
        });
    });
}
function night_to_day(...selectorLists){
    Body.setColor('black');
    Body.setBackgroundColor('white');
    selectorLists.forEach(selectorList =>{
        selectorList.forEach(selector => {
            if(selector !== document.getElementById('active')){
                // selector.style.color = 'black';
                $(selector).css('color', 'black');
            }
            // selector.style.borderColor = 'black';
            $(selector).css('borderColor', 'black');
        });
    });
}

function nightDayHandler(self){
    // if(darkStorage.getItem('dark_value') === null){
    //     currDarkValue = 'night';
    // }else{
    //     currDarkValue = darkStorage.getItem('dark_value');
    //     document.write(currDarkValue);
    // }

    if(self.value === 'day'){//night->day
        night_to_day(document.querySelectorAll('a'), document.querySelectorAll('div'), document.querySelectorAll('h1'));
        self.value = 'night';
        //darkStorage.setItem('dark_value', self.value);
    }
    else{//day->night
        day_to_night(document.querySelectorAll('a'), document.querySelectorAll('div'), document.querySelectorAll('h1'));
        self.value = 'day';
        //darkStorage.setItem('dark_value', self.value);
    }
}