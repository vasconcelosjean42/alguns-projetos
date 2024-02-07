const value = '07:05:45PM'
function timeConversion(s) {
    const partOfDay = s.slice(8)
    s = s.slice(0, 8)
    var time = s.split(':').map(n => Number(n))
    if(partOfDay === 'AM')
        if(time[0] < 12){
            console.log(s)
        }else{
            time[0] -= 12
            time = time.map(t => t < 10 ? `0${t}` : t)
            console.log(`${time[0]}:${time[1]}:${time[2]}`)
        }
    else{
        if(time[0] >= 12){
            console.log(s)
        }else{
            time[0] += 12
            time = time.map(t => t < 10 ? `0${t}` : t)
            console.log(`${time[0]}:${time[1]}:${time[2]}`)
        }
    }
}
var time = [
    '00:00:00AM',
    '00:00:00PM',
    '12:00:00AM',
    '12:00:00PM',
    '12:01:01AM',
    '12:01:01PM',
    '24:00:00AM',
    '24:00:00PM',
    '24:00:01AM',
    '24:00:01PM',
]
time.forEach(t => timeConversion(t))