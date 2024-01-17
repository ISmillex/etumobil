import {getScheduleOfLecture, getEnrolledLecturesOfStudent, getLecture} from "$lib/fetcher.js";

export default class Student {
    constructor(student_ID, student_Fname, student_Lname, student_Mail, student_Department, student_Grade) {
        this.student_ID = student_ID;
        this.student_Fname = student_Fname;
        this.student_Lname = student_Lname;
        this.student_Mail = student_Mail;
        this.student_Department = student_Department;
        this.student_Grade = student_Grade;
        this.schedule = Array(6).fill().map(() => Array(14).fill(null));
        this.enrolledLectures = [];

    }

    /*

    async getList() {
        let studentId = this.student_ID;
        let lectures = await getEnrolledLecturesOfStudent(studentId);

        let list = []

        for (let lecture of lectures) {
            list.push(await getLecture(lecture));
        }

        return list;

    }



    async createSchedule() {
        let studentId = this.student_ID;
        let lectures = await getEnrolledLecturesOfStudent(studentId);

        let days = ['Pzt', 'Sal', 'Car', 'Per', 'Cum', 'Cmt'];
        let hours = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18","19","20","21"];

        for (let lecture of lectures) {
            let lectureSchedule = await getScheduleOfLecture(lecture.lecture_Code);
            for (let lectureSlot of lectureSchedule) {
                let dayIndex = days.indexOf(lectureSlot.day);
                let hourIndex = hours.indexOf(lectureSlot.start);
                this.schedule[dayIndex][hourIndex] = lecture
            }
        }
        return this.schedule;
    }


     */



}