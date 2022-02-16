const idCalendar = {
  'cau': 'c_f7s152p79418hn81q6i6fbqu2g@group.calendar.google.com',
  'cill': 'c_himkct5ojmprh9e8hc5b7k9m28@group.calendar.google.com',
  'llid': 'c_a00bsgjaei8a2h6sjgjlo5dm4c@group.calendar.google.com',
  'ring': 'c_g95j0ml2hn34k4kb8eqvv39ap0@group.calendar.google.com',
  'pic': 'c_d6kkdi73lk7cq5nrigq0dsrq6g@group.calendar.google.com',
  'truc': 'c_en2lebdan57naal3mkq494e0j4@group.calendar.google.com'
}

const colorBranques = {
  'cau': '#A56DA6',
  'cill': '#EF6024',
  'llid': '#F2BB16',
  'ring': '#13678A',
  'pic': '#D92525',
  'truc': '#2D5731'
}

const key = 'AIzaSyBnNAISIUKe6xdhq1_rjor2rxoI3UlMY7k'

var calendarSelected = 'cau'

$(document).ready(function() {
  generarCalendario()
  getEvents()
  $('#calendarSelect').change(function() {
    calendarSelected = $(this).val()
    getEvents()
  })
});

function getEvents() {
  let events = []
  const url = 'https://www.googleapis.com/calendar/v3/calendars/' + idCalendar[calendarSelected] + '/events?key=' + key
  $.get(url, function(data, status) {
    if (status === 'success') {
      var calendarEvents = data.items
      const color = colorBranques[calendarSelected]
      const textColor = '#fff'
      for (var i = 0; i < calendarEvents.length; i++) {
        let evento = {}
        evento.title = calendarEvents[i].summary
        if (calendarEvents[i].hasOwnProperty('description')) {
          evento.description = calendarEvents[i].description
        }
        if (calendarEvents[i].hasOwnProperty('location')) {
          evento.location = calendarEvents[i].location
        }
        let tipoDate = Object.keys(calendarEvents[i].start)
        evento.start = calendarEvents[i].start[tipoDate[0]]
        evento.end = calendarEvents[i].end[tipoDate[0]]
        evento.color = color
        evento.textColor = textColor
        events.push(evento)
      }
      $("#calendar").fullCalendar('removeEvents');
      $("#calendar").fullCalendar('addEventSource', events);
    }
  });
}

function generarCalendario() {
  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next,today',
      center: 'title',
      right: 'month,agendaWeek'
    },
    defaultDate: new Date(),
    buttonIcons: true, // show the prev/next text
    weekNumbers: false,
    editable: false,
    eventLimit: true, // allow 'more' link when too many events
    events: []
  });
}
