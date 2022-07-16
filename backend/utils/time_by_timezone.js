exports.getTimeByTimeZone = (timeZone) => {
    let options = {
        timeZone: timeZone,
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    },
    formatter = new Intl.DateTimeFormat('en-GB', options);
    const convertedDateTime = formatter.format(new Date())
    // console.log({ convertedDateTime });
    return convertedDateTime;
}