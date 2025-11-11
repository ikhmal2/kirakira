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
  IonButton,
} from '@ionic/angular/standalone';
import { OverlayEventDetail } from '@ionic/core/components';
import { addIcons } from 'ionicons';
import { cashOutline, documentTextOutline, checkmarkOutline } from 'ionicons/icons';
import { ExpenseData } from '../../services/interfaces';

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
    IonButton,
  ],
})
export class AddExpenseModalComponent implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  constructor() {
    addIcons({ documentTextOutline, cashOutline, checkmarkOutline });
    effect(() => {
      this.name.set(this.SelectedName());
      this.selectedList.push(this.name());
    });
  }

  isModalOpen = input(false);
  modalClosed = output<void>();
  expenseSaved = output<ExpenseData>();
  SelectedName = input('');

  name = signal<string>('');
  description = signal<string>('');
  amount = signal<number>(0);

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    this.modalClosed.emit();
  }

  saveExpense() {
    const expenseData: ExpenseData = {
      name: this.name(),
      description: this.description(),
      amount: this.amount()
    };
    this.expenseSaved.emit(expenseData);
    this.modal.dismiss();
  }

  public selectedList: string[] = [];

  ngOnInit() {}

  parseAmount(value: string): number {
    return parseFloat(value) || 0;
  }
}
