import { Component, OnInit } from '@angular/core';
import { IPublisher } from '../../model/publisher';
import { PublisherService  }  from '../../publisher.service'
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-publishers-list',
  templateUrl: './publishers-list.component.html',
  styleUrls: ['./publishers-list.component.css']
})
export class PublishersListComponent implements OnInit {

  publisherList: IPublisher[];
  message: string;
  showPublisherForm: boolean = false;

  currentPublisher : IPublisher;
  deletePublisherBool: boolean;

  constructor(private publisherService: PublisherService) { }

  ngOnInit(): void {
    this.publisherService.getPublishers().subscribe({
      next: (value: IPublisher[] )=> this.publisherList = value,
      complete: () => console.log('publisher service finished'),
      error: (mess) => this.message = mess
  })
}
clicked (publisher: IPublisher): void {
  this.currentPublisher = publisher;
}

openAddPublisher(): void {
  this.currentPublisher = null;
  this.showPublisherForm = true;
}

openEditPublisher(): void {
  this.showPublisherForm = true;
}

openDelete(): void {
  this.deletePublisherBool = true;
  console.log('Delete publisher with id ' + this.currentPublisher._id);
  this.deletePublisher(this.currentPublisher._id)
  window.location.reload();
}
publisherFormClose(publisher: IPublisher): void{
  this.showPublisherForm = null;
  console.table(publisher);

  if (publisher == null){
    this.currentPublisher = null;
  }

  else if (this.currentPublisher == null){
    this.addNewPublisher(publisher);
  }

  else {
    console.log('need to update publisher with id ' + this.currentPublisher._id);
    this.updatePublisher(this.currentPublisher._id, publisher)
  }
}
updatePublisher (id: string, publisher: IPublisher){
  this.publisherService.updatePublisher(id, publisher)
  .subscribe({
    next: publisher => this.message = "publisher has been modified",
    error: (err) => this.message = err
  });

// so the updated list appears

    this.publisherService.getPublishers().subscribe({
      next: (value: IPublisher[]) => this.publisherList = value,
      complete: () => console.log('publisher service finished'),
      error: (mess) => this.message = mess
    })
    window.location.reload();
}

addNewPublisher(newPublisher: IPublisher): void {
  console.log('adding new publisher ' + JSON.stringify(newPublisher));
  this.publisherService.addPublisher({ networth: 'dsfdsfa', ...newPublisher })
    .subscribe({
      next: publisher => {
        console.log(JSON.stringify(publisher) + ' has been added');
      this.message = "new publisher has been added";},
      error: (err) => this.message = err
    });
    this.showPublisherForm = false;

    this.publisherService.getPublishers().subscribe({
      next: (value: IPublisher[] ) => this.publisherList = value,
      complete: () => console.log('Publisher Service Completed'),
      error: (messag) => this.message = messag
    })
    console.log("check if working");
    window.location.reload();
  }

  deletePublisher(id:string) {
    this.publisherService.deletePublisher(id)
    .subscribe({
      next: publisher => this.message = "publisher has been deleted",
      error: (err) => this.message = err
    });

    this.publisherService.getPublishers().subscribe({
      next: (value: IPublisher[] ) => this.publisherList = value,
      complete: () => console.log('Publisher Service Completed'),
      error: (messag) => this.message = messag
    })
    window.location.reload();
  }



  isSelected(publisher: IPublisher): boolean{
    if (!publisher || !this.currentPublisher) {
      return false;
    }
    else {
      return publisher.id === this.currentPublisher.id;
    }
  }
}
