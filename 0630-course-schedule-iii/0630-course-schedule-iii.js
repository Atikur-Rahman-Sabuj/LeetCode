/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function(courses) {
    courses.sort((a, b) => a[1] - b[1]);
    let totalDay = 0;
    const days = [];
    for (let i = 0; i < courses.length; i++) {
      if (totalDay + courses[i][0] <= courses[i][1]) {
         days.push(courses[i][0]);
         totalDay += courses[i][0];
      } else {
         let maxIndex = 0;
         for (let i = 1; i < days.length; i++) {
            if (days[i] > days[maxIndex]) {
               maxIndex = i;
            }
         }
         if (courses[i][0] < days[maxIndex]) {
            totalDay = totalDay - days[maxIndex] + courses[i][0];
            days[maxIndex] = courses[i][0];
         }
      }
    }
    return days.length;
};