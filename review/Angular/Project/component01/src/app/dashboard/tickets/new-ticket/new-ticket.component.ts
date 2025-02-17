import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent,ButtonComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit,AfterViewInit {
  
  @ViewChild('form') form? : ElementRef<HTMLFormElement>;

  ngOnInit() {
      console.log('ticket init');
      console.log(this.form?.nativeElement)

  }

  ngAfterViewInit() {
    console.log('ticket after init');
    console.log(this.form?.nativeElement)
  }

onSubmit(titleElement: string,textElement: string) {
    //console.log('submit');
   
    console.log('Entered Title:' + titleElement);
    console.log('Entered Text:' + textElement);
    this.form?.nativeElement.reset();
}

}
