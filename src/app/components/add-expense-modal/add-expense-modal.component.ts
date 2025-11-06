import {
  Component,
  OnInit,
  ViewChild,
  computed,
  effect,
  input,
  output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonModal,
  IonContent,
  IonItem,
  IonInput,
} from '@ionic/angular/standalone';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-add-expense-modal',
  templateUrl: './add-expense-modal.component.html',
  styleUrls: ['./add-expense-modal.component.scss'],
  imports: [IonInput, IonItem, IonContent, IonModal, FormsModule],
})
export class AddExpenseModalComponent implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  constructor() {
    effect(() => {
      this.name.set(this.SelectedName());
    });
  }

  isModalOpen = input(false, { alias: 'setModalOpen' });
  modalClosed = output<void>();
  SelectedName = input('');

  name = signal<string>('');

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    this.modalClosed.emit();
  }
  ngOnInit() {}
}
