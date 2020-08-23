import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any): number {
    let now: Date = new Date(); // get current date and time
    let nowWithNoDate: any = new Date(now.getHours(), now.getMinutes(), now.getSeconds());

    var timeDifference = Math.abs(value - nowWithNoDate) //returns value in milliseconds

    const secondsInHour = 3600;
    var timeDifferenceSeconds = timeDifference * 0.001; //convert milliseconds to seconds
    var timeCounter = timeDifferenceSeconds / secondsInHour;

    if (timeCounter >= 0 && value > nowWithNoDate) {
      return timeCounter;
    } else {
      return 0;
    }
  }
}
