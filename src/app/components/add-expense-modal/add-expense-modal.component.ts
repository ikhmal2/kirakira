import { Component, OnInit, ViewChild, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonModal,
  IonContent,
  IonItem,
  IonInput,
  IonCard,
} from '@ionic/angular/standalone';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-add-expense-modal',
  templateUrl: './add-expense-modal.component.html',
  styleUrls: ['./add-expense-modal.component.scss'],
  imports: [IonInput, IonItem, IonContent, IonModal, FormsModule, IonCard],
})
export class AddExpenseModalComponent implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  constructor() {}

  isModalOpen = input(false, { alias: 'setModalOpen' });
  modalClosed = output<void>();

  name!: string;
  //   name = 'ikhmal'

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    this.modalClosed.emit();
  }
  ngOnInit() {}
}
