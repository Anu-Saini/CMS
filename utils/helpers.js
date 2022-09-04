module.exports = {
  // the helper method 'format_time' will take in a timestamp and return a string with only the time
  format_time: (date) => {
    // We use the 'toLocaleTimeString()' method to format the time as H:MM:SS AM/PM
    // return date.toLocaleTimeString();
    var year = date.getFullYear();

    var day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;

    return day + "/" + month + "/" + year;
  },
};
