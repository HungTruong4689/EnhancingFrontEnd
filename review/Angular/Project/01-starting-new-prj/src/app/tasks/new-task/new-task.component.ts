import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId! :string;
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  private tasksService = inject(TasksService);
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
onCancel() {
  this.cancel.emit();
}
onSubmit(){
  // this.add.emit({title: this.enteredTitle, summary: this.enteredSummary, dueDate: this.enteredDueDate})
  this.tasksService.addTask(this.userId,{title: this.enteredTitle, summary: this.enteredSummary, dueDate: this.enteredDueDate})
   this.cancel.emit();

}

}
