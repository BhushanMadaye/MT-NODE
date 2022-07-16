const utils = require('../utils/time_by_timezone')

module.exports.GetTime = (req, res, next) => {

    /** To get a list of all available timezone use "Intl.supportedValuesOf('timeZone')" */
    const timeZones = [
        'Asia/Kolkata',
        'Asia/Dubai',
        'America/New_York',
        'Australia/Melbourne',
        'Europe/Rome'
    ]
    /**
     * Available values fo time zones - https://docs.trifacta.com/display/DP/Supported+Time+Zone+Values
     * Intl.DateTimeFormat cheatsheet - https://devhints.io/wip/intl-datetime
     */

    const result = {};
    timeZones.forEach(zone => {
        result[zone] = utils.getTimeByTimeZone(zone);
    })
    console.log(result)

    res.status(200).send(result)
}