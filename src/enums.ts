enum Colors {
    RED ,
    BLUE,
    GREEN
}

/*
Cosa identica che c'era in c# quindi... easy!
come se ogni cosa fosse salvata come un indice tipo 0 , 1 ,2
 */

let myColor: Colors = Colors.GREEN;


enum Days{
    MOONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATRUDAY,
    SUNDAY
    };

const getDailyMessage = (day: Days) => {
    switch (day) {
        case Days.MOONDAY:
            return "Get a coffe and get busy!"
        case Days.FRIDAY:
            return "Push, through, only 1 days left"
            
    }
}

console.log(Days);
