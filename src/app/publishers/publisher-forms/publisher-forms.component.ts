import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPublisher } from 'src/app/model/publisher';
import { PublisherService } from '../../publisher.service';

@Component({
  selector: 'app-publisher-forms',
  templateUrl: './publisher-forms.component.html',
  styleUrls: ['./publisher-forms.component.css']
})
export class PublisherFormsComponent implements OnInit {

  @Input() publisher : IPublisher;

  @Output() publisherFormClose = new EventEmitter<IPublisher>();

  message: string = '';
  isNewPublisherForm: boolean = false;
  publisherForm: FormGroup;

  get title() {
    return this.publisherForm.get('title');
  }
  get networth() {
    return this.publisherForm.get('networth');
  }
  get id() {
    return this.publisherForm.get('id');
  }

  constructor() { }

  ngOnInit(): void {
    console.table(this.publisher);
    if (this.publisher == null) {
      this.publisher = {title:'', networth: '', id: '',_id: ''};
      this.isNewPublisherForm = true;
  }

  this.publisherForm = new FormGroup({
    title: new FormControl(this.publisher.title, [Validators.required]),
    networth: new FormControl(this.publisher.networth, [Validators.required]),
    id: new FormControl(this.publisher.id,[Validators.required]),
  });
}
onSubmit() {
  this.publisherFormClose.emit(this.publisherForm.value)
}

closeForm(){
  this.publisherFormClose.emit(null)
}
}
