/**
 * 7. Calcule a diferença em dias entre duas datas.

 */

const d1 = "20/03/2025 10:48:00";
const d2 = "18/04/2025 12:01:00";
const diff = moment(d2,"DD/MM/YYYY HH:mm:ss").diff(moment(d1,"DD/MM/YYYY HH:mm:ss"));
const dias = moment.duration(diff).asDays();
console.log(dias); 