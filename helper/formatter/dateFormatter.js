export const orj_to_custom_single_day = (date) => {
    if(!date) return "";
    
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });

    const getOrdinal = (n) => {
        const s = ["th", "st", "nd", "rd"];
        const v = n % 100;
        return s[(v-20) % 10] || s[v] || s[0];
    };

    return `${day}${getOrdinal(day)} ${month}`;
};

export const orj_to_custom_multi_day = (date1, date2) => {
    if(!date1 && !date2) return "";

    const day1 = date1.getDate();
    const day2 = date2.getDate();
    const month1 = date1.toLocaleString("default", { month: "long" });
    const month2 = date2.toLocaleString("default", { month: "long" });

    const formatted = month1 === month2 ? `${day1}-${day2} ${month1}` : `${day1} ${month1.slice(0,3)}-${day2} ${month2.slice(0,3)}` 
    return formatted;
};