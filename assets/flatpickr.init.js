//Flatpickr

var today = new Date();


$("#event_date").flatpickr({
    defaultDate: [today, new Date().fp_incr(7)],
    minDate: today,
    maxDate: new Date().fp_incr(365),

    altInput: true,
    altFormat: "M j",
    dateFormat: "Y-m-d",



    mode: "range",
});


$("#id_date_event").flatpickr({
    defaultDate:today,
    minDate: today,
    maxDate: new Date().fp_incr(365),

    altInput: true,
    altFormat: "j M Y - H:i",
    enableTime: true,
    dateFormat: "Y-m-d H:i",

    time_24hr: true
});
