import {
  Component,
  OnInit,
  ViewChild,
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
  IonCard,
  IonIcon,
} from '@ionic/angular/standalone';
import { OverlayEventDetail } from '@ionic/core/components';
import { addIcons } from 'ionicons';
import { cashOutline, documentTextOutline } from 'ionicons/icons';

@Component({
  selector: 'app-add-expense-modal',
  templateUrl: './add-expense-modal.component.html',
  styleUrls: ['./add-expense-modal.component.scss'],
  imports: [
    IonIcon,
    IonInput,
    IonItem,
    IonContent,
    IonModal,
    FormsModule,
    IonCard,
  ],
})
export class AddExpenseModalComponent implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  constructor() {
    addIcons({ documentTextOutline, cashOutline });
    effect(() => {
      this.name.set(this.SelectedName());
      this.selectedList.push(this.name());
    });
  }

  isModalOpen = input(false, { alias: 'setModalOpen' });
  modalClosed = output<void>();
  SelectedName = input('');

  name = signal<string>('');

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    this.modalClosed.emit();
  }

  public selectedList: string[] = [];

  ngOnInit() {}
}
