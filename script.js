function showTime() {
  let time = new Date();
  let hours = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let session = "AM";
  let gmt = time.toString().substring(25, 31);

  if (hours >= 12) {
    session = "PM";
  }
  if (hours > 12) {
    hours = hours - 12;
  } else if (hours == 12 && session == "PM") {
    hours = 0;
  }
  hours = hours < 10 ? "0" + hours : hours;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  $("#hours").text(hours);
  $("#min").text(min);
  $("#sec").text(sec);
  $("#period").text(session);
  $("#gmt").text(gmt);
  setTimeout(showTime, 1000);
}
showTime();
