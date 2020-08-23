import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any): number {
    let today: Date = new Date(); // get current date and time
    let todayWithNoDate: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    var dateDifference = Math.abs(value - todayWithNoDate) //returns value in milliseconds

    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference * 0.001; //convert milliseconds to seconds
    var dateCounter = dateDifferenceSeconds / secondsInDay;

    if (dateCounter >= 0 && value > todayWithNoDate) {
      return dateCounter;
    } else {
      return 0;
    }
  }
}
