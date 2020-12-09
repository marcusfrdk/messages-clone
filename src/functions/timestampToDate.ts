export default (timestamp:number) => {
    const now = +new Date();
    const minute = 60 * 1000; // 60 * 1000
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;

    
    // Calculate differences in time
    const diff = now - timestamp
    
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diff / (1000 * 60 * 60)); // % 24
    const diffMinutes = Math.floor(diff / (1000 * 60)); // % 60

    // Get date in format DD/MM-YYYY
    // Used for: Dates older than a week
    const date_ts = new Date(timestamp);
    const date_day = date_ts.getDate();
    const date_month = date_ts.getMonth() + 1;
    const date_year = date_ts.getFullYear();
    const date = date_day + "-" + date_month + "-" + date_year

    // Check how to output time
    if(diff < minute){ // Check if within last minute
        return "Now"
    } else if(diffMinutes < 60){ // Check if within last hour
        return diffMinutes + " minutes ago"
    } else if(diffHours < 24){ // Check if within last day
        if(diffHours == 1){
            return diffHours + " hour ago"
        } else {
            return diffHours + " hours ago"
        }
    } else if(diffDays < 7){ // Check if within last week
        if(diffDays == 1){
            return diffDays + " day ago"
        } else {
            return diffDays + " days ago"
        }
    } else { // Else, return date
        return date;
    }
}