import dayjs from 'dayjs';
import ja from 'dayjs/locale/ja';
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";


export default function DayWeek() {
  dayjs.locale(ja);
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const day = dayjs.utc().tz("Asia/Tokyo")
  return (
    <span>
      {day.format('YYYY-MM-DD ddd')}
    </span>
  )
}