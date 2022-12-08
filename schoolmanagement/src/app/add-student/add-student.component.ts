import { Component, OnInit } from '@angular/core';
import { StuService } from '../stu.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private s1: StuService) { }

  ngOnInit(): void {
  }

  adddata(addform: { value: any; }) {
    return this.s1.adddata1(addform.value).subscribe();
  }
}
