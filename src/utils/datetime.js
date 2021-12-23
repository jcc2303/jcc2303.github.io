
// eslint-disable-next-line no-unused-vars
function convertNative(dt) {
    // Native
    const datePattern = /^(\d{2})-(\d{2})-(\d{4})$/;
    const [, year, month, day] = datePattern.exec(dt);
    return new Date(`${month}, ${day} ${year}`);    
}


export const Datetime = {
    getDisplayFromDate: function (datetime) {
        if (datetime === 'Present') {
            return datetime;
        }

        // const nativeDate = convertNative(datetime)

        return datetime // TODO: nativeDate; =>  to MMM YY
    }
};
