import * as moment from 'moment';

export class DateUtilities {
  static GetCurrentUTCDate(): Date {
    return moment().utc().toDate();
  }
}
