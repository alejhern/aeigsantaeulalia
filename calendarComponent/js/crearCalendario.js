function addZero(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}

var hoy = new Date();
var dd = hoy.getDate();
if(dd<10) {
    dd='0'+dd;
}

if(mm<10) {
    mm='0'+mm;
}

var mm = hoy.getMonth()+1;
var yyyy = hoy.getFullYear();

dd=addZero(dd);
mm=addZero(mm);

$(document).ready(function() {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultDate: yyyy+'-'+mm+'-'+dd,
        buttonIcons: true, // show the prev/next text
        weekNumbers: false,
        editable: false,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'All Day Event',
                description: 'Lorem ipsum 1...',
                start: yyyy+'-'+mm+'-01',
                color: '#3A87AD',
                textColor: '#ffffff',
            },
            {
                title: 'Long Event',
                description: 'Lorem ipsum 2...',
                start:  yyyy+'-'+mm+'-07',
                end:  yyyy+'-'+mm+'-10',
                color: '#3A87AD',
                textColor: '#ffffff',
            },
            {
                title: 'Conference',
                description: 'Lorem ipsum 5...',
                start:  yyyy+'-'+mm+'-11',
                end:  yyyy+'-'+mm+'-13',
                color: '#3A87AD',
                textColor: '#ffffff',
            },
            {
                title: 'Meeting',
                description: 'Lorem ipsum 6...',
                start:  yyyy+'-'+mm+'-12T10:30:00',
                end:  yyyy+'-'+mm+'-12T12:30:00',
                color: '#3A87AD',
                textColor: '#ffffff',
            },
            {
                title: 'Lunch',
                description: 'Lorem ipsum 7...',
                start:  yyyy+'-'+mm+'-12T12:00:00',
                color: '#3A87AD',
                textColor: '#ffffff',
            },
            {
                title: 'Meeting',
                description: 'Lorem ipsum 8...',
                start:  yyyy+'-'+mm+'-12T14:30:00',
                color: '#3A87AD',
                textColor: '#ffffff',
            },
            {
                title: 'Happy Hour',
                description: 'Lorem ipsum 9...',
                start:  yyyy+'-'+mm+'-12T17:30:00',
                color: '#3A87AD',
                textColor: '#ffffff',
            },
            {
                title: 'Dinner',
                description: 'Lorem ipsum 10...',
                start:  yyyy+'-'+mm+'-12T20:00:00',
                color: '#3A87AD',
                textColor: '#ffffff',
            },
            {
                title: 'Birthday Party',
                description: 'Lorem ipsum 11...',
                start:  yyyy+'-'+mm+'-13T07:00:00',
                color: '#3A87AD',
                textColor: '#ffffff',
            },
            {
                title: 'Event with link',
                description: 'Lorem ipsum 12...',
                url: 'http://www.jose-aguilar.com/',
                start:  yyyy+'-'+mm+'-28',
                color: '#3A87AD',
                textColor: '#ffffff',
            }
        ],
	});
});
