function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`; 
};

const mondayWork = function (activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(arg2 = '*'){
    return function (arg1 = 'special') {
        return `You are ${arg2}${arg1}${arg2}!`;
    }
}