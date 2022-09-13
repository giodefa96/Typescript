"use strict";
var Colors;
(function (Colors) {
    Colors[Colors["RED"] = 0] = "RED";
    Colors[Colors["BLUE"] = 1] = "BLUE";
    Colors[Colors["GREEN"] = 2] = "GREEN";
})(Colors || (Colors = {}));
/*
Cosa identica che c'era in c# quindi... easy!
come se ogni cosa fosse salvata come un indice tipo 0 , 1 ,2
 */
let myColor = Colors.GREEN;
var Days;
(function (Days) {
    Days[Days["MOONDAY"] = 0] = "MOONDAY";
    Days[Days["TUESDAY"] = 1] = "TUESDAY";
    Days[Days["WEDNESDAY"] = 2] = "WEDNESDAY";
    Days[Days["THURSDAY"] = 3] = "THURSDAY";
    Days[Days["FRIDAY"] = 4] = "FRIDAY";
    Days[Days["SATRUDAY"] = 5] = "SATRUDAY";
    Days[Days["SUNDAY"] = 6] = "SUNDAY";
})(Days || (Days = {}));
;
const getDailyMessage = (day) => {
    switch (day) {
        case Days.MOONDAY:
            return "Get a coffe and get busy!";
        case Days.FRIDAY:
            return "Push, through, only 1 days left";
    }
};
console.log(Days);
