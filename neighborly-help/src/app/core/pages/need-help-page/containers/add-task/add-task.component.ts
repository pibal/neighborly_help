import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivityType } from '../../../../../model/activity-type';
import { TaskApi } from '../../../../../api/task-api';

@Component({
  selector: 'nh-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  activityType = ActivityType;

  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private service: TaskApi) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      type: [null, [Validators.required]],
      date: [null, [Validators.required]],
      details: [null],
      creatorPhoneNumber: [null, [Validators.required]],
      epidemicDanger: [true],
      localization: [null],
      address: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    for (const i in this.taskForm.controls) {
      this.taskForm.controls[i].markAsDirty();
      this.taskForm.controls[i].updateValueAndValidity();
    }
    if (this.taskForm.valid) {
      this.service.create({
        ...this.taskForm.value,
        // TODO: Replace with true values
        localization: {
          longitude: 20,
          latitude: 50,
        },
      });
    }
  }
}
