export type schedule ={
    scheduleId:string,
    eventTypes :string,
    eventName :string,
    meetLink:string,
    descriptions:string,
    duration:string,
    date:string,
    userEmail:string
    method:string
    email:string,
    scheduleLocation:string,
    userName:string
    dateAndTime:string
}

export type email = {
    userEmail:string,
    email:string,
    subject:string,
    userName:string,
    name:string,
    eventName:string,
    dateAndTime:string,
    method:string,
    meetLink:string,
    detailsLink:string
}