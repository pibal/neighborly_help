import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivityType } from '../../../../../model/activity-type';
import { TaskApi } from '../../../../../api/task-api';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'nh-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  activityType = ActivityType;

  taskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: TaskApi,
    private notification: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      type: [null, [Validators.required]],
      date: [null, [Validators.required]],
      details: [null],
      creatorPhoneNumber: [null, [Validators.required]],
      epidemicDanger: [true],
      localization: [null],
      address: this.fb.group({
        region: [null, [Validators.required]],
        city: [null, [Validators.required]],
        street: [null, [Validators.required]],
        postalCode: [null],
        local: [null, [Validators.required]],
      }),
    });
  }

  checkValidity(controls: { [key: string]: AbstractControl }) {
    for (const i in controls) {
      controls[i].markAsDirty();
      controls[i].updateValueAndValidity();
    }
  }

  submitForm(): void {
    this.checkValidity(this.taskForm.controls);
    this.checkValidity(this.taskForm.get('address')['controls']);

    if (this.taskForm.valid) {
      this.service
        .create({
          ...this.taskForm.value,
        })
        .subscribe(x => {
          this.taskForm.reset();
          this.notification.success(
            'Dodano',
            'Zgłoszenie zostało zarejestrowane'
          );
        });
    }
  }

  changeLocation($event: any) {
    this.taskForm.get('localization').setValue({
      latitude: $event.latitude,
      longitude: $event.longitude,
    });
  }
}
