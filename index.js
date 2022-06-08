// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("bathe my dog");

const mondayWork = function(role = "go to the office"){
    return `This Monday, I will ${role}.`
}
mondayWork();
mondayWork("work from home");

let wrapAdjective = function(style="*") {
    return function(adjective="special person") {
      return `You are ${style}${adjective}${style}!`
    }
  }