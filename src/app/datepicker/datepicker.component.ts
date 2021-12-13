import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  dateIndex = 1;
  translateX = 0;
  numberOfDays: number;
  carouselDates;
  selectedDate;
  today = moment().format("YYYY-MM-DD")
  items: any[] = [];
  months = [
    {name: 'January', code: '01', days: 31},
    {name: 'February', code: '02', days: 28},
    {name: 'March', code: '03', days: 31},
    {name: 'April', code: '04', days: 30},
    {name: 'May', code: '05', days: 31},
    {name: 'June', code: '06', days: 30},
    {name: 'July', code: '07', days: 31},
    {name: 'August', code: '08', days: 31},
    {name: 'September', code: '09', days: 30},
    {name: 'October', code: '10', days: 31},
    {name: 'November', code: '11', days: 30},
    {name: 'December', code: '12', days: 31},
  ]

  constructor() { }

  ngOnInit(): void {
    this.goToToday();

    this.carouselDates = document.querySelector('.carousel-images');
    // this.numberOfDays = document.querySelectorAll('.carousel-images .date').length;
    
    let year = new Date().getFullYear();
    let isLeap =  year % 400 === 0;

    if(isLeap) this.months[1].days = 29;

    // let month = this.months[new Date().getMonth()];

    // // Creating an array with specified date range
    // this.items = this.getDates(
    //   new Date(`${year}-${month.code}-01T14:34:19.579Z`),  // "2021-02-01T14:34:19.579Z"
    //   new Date(`${year}-${month.code}-${month.days}T14:34:19.579Z`)
    // );
  }

   // Common method to create an array of dates
   getDates(startDate: any, stopDate: any) {
    let dateArray = [];
    let currentDate = moment(startDate);
    stopDate = moment(stopDate);

    let initMonth = currentDate.month();
    while (currentDate <= stopDate) {
      let dateObj:any = {date: moment(currentDate).format("YYYY-MM-DD"), weekDay:  moment(currentDate).isoWeekday()};

      if(currentDate.month() !== initMonth) {
        dateObj.month = this.months[currentDate.month()].name;
        initMonth = currentDate.month();
      }

      dateArray.push(dateObj);
      currentDate = moment(currentDate).add(1, "days");
    }

    return dateArray;
  }

  slide(e) {
    if (e.target.id === 'previous') {
      if (this.dateIndex !== 1) {
        this.dateIndex--;
        this.translateX += 60;
      }
    } else {
      if (this.dateIndex !== this.numberOfDays) {
        this.dateIndex++;
        this.translateX -= 60;
      }
    }

    this.carouselDates.style.transform = `translateX(${this.translateX}px)`;

    // console.log(this.carouselDates)
  }

  goToBegin() {
    this.dateIndex = 1;
    this.translateX = 0;
    this.carouselDates.style.transform = `translateX(${this.translateX}px)`;
  }

  goToToday() {
    let today = new Date()
    let nextThirty = new Date().setDate(today.getDate()+59)

    // Creating an array with specified date range
    this.items = this.getDates(
      new Date(),
      new Date(nextThirty)
    );

    this.numberOfDays = this.items.length;

    this.selectedDate = this.items[0].date;
    // this.goToBegin();
    // console.log(this.items)
  }

  selectMonth(e) {
    let month = this.months[e.target.value];
    let year = new Date().getFullYear();

    this.items = this.getDates(
      new Date(`${year}-${month.code}-01T14:34:19.579Z`),  // "2021-02-01T14:34:19.579Z"
      new Date(`${year}-${month.code}-${month.days}T14:34:19.579Z`)
    );

    this.numberOfDays = this.items.length;
    this.goToBegin();
    setTimeout(() => {
      this.numberOfDays = document.querySelectorAll('.carousel-images .date').length;
    }, 100)

    // console.log(this.items)
  }

  selectDate(date) {
    this.selectedDate = date;
    console.log(this.selectedDate);
  }
}
