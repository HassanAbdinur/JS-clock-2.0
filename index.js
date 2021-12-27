var months = ['January', 'February', 'March', 'April', 'May', 
'June', 'July', 'August', 'September', 'October', 'November', 
'December'];

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    
var date_data = new Date();
// Get day
let current_day = date_data.getDay();
document.getElementById('day').textContent = days[current_day];


// Get Month Date Year
current_month = date_data.getMonth();
current_date = date_data.getDate();
var current_year = date_data.getFullYear();
document.getElementById('month_date_year').innerHTML = `${months[current_month]} ${current_date}, ${current_year}`;

// Time
current_hour = date_data.getHours();
current_minute = date_data.getMinutes();
am_pm = ''

if (current_hour >= 12) {
    am_pm = 'PM'
} else {
    am_pm = 'AM'
}

document.getElementById('time').innerHTML = `${current_hour}:${current_minute} ${am_pm}`