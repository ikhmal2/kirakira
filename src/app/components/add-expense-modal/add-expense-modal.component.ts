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
import { CommonModule } from '@angular/common';
import {
  IonModal,
  IonContent,
  IonItem,
  IonInput,
  IonCard,
  IonIcon,
  IonButton,
  IonSearchbar,
  IonList,
  IonLabel,
} from '@ionic/angular/standalone';
import { OverlayEventDetail } from '@ionic/core/components';
import { addIcons } from 'ionicons';
import {
  cashOutline,
  documentTextOutline,
  checkmarkOutline,
  closeCircleOutline,
} from 'ionicons/icons';
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
    IonSearchbar,
    IonList,
    IonLabel,
    CommonModule,
  ],
})
export class AddExpenseModalComponent implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  constructor() {
    addIcons({
      documentTextOutline,
      cashOutline,
      checkmarkOutline,
      closeCircleOutline,
    });
    effect(() => {
      const selectedName = this.SelectedName();
      this.name.set(selectedName);
      // Only add if name is not empty, not just whitespace, and not already in list
      if (
        selectedName &&
        selectedName.trim() !== '' &&
        !this.selectedList.includes(selectedName)
      ) {
        this.selectedList.push(selectedName);
      }
    });
  }

  isModalOpen = input(false);
  modalClosed = output<void>();
  expenseSaved = output<ExpenseData>();
  SelectedName = input('');
  allEntities = input<string[]>([]);

  name = signal<string>('');
  description = signal<string>('');
  amount = signal<number>(0);
  searchQuery = signal<string>('');
  searchResults = signal<string[]>([]);

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    this.modalClosed.emit();
    // Clean up when modal closes
    this.cleanSelectedList();
  }

  saveExpense() {
    // Clean the selected list before saving to remove any empty strings
    this.cleanSelectedList();

    const expenseData: ExpenseData = {
      entities: this.selectedList,
      description: this.description(),
      amount: this.amount(),
    };
    this.expenseSaved.emit(expenseData);
    this.modal.dismiss();
    this.name.set('');
    this.description.set('');
    this.amount.set(0);
  }

  public selectedList: string[] = [];

  ngOnInit() {
    // Clean the selected list on initialization to remove any empty strings
    this.cleanSelectedList();
  }

  parseAmount(value: string): number {
    return parseFloat(value) || 0;
  }

  handleSearch(event: any) {
    const query = event.target.value?.toLowerCase() || '';
    if (query) {
      const filtered = this.allEntities().filter(
        (entity) => entity && entity.toLowerCase().includes(query)
      );
      this.searchResults.set(filtered);
    } else {
      this.searchResults.set([]);
    }
  }

  addEntity(entity: string) {
    // Only add if entity is not empty, not just whitespace, and not already in list
    if (entity && entity.trim() !== '' && !this.selectedList.includes(entity)) {
      this.selectedList.push(entity);
    }
    this.searchQuery.set('');
    this.searchResults.set([]);
  }

  removeEntity(entity: string) {
    const index = this.selectedList.indexOf(entity);
    if (index > -1) {
      this.selectedList.splice(index, 1);
    }
  }

  // Helper method to clean empty strings from selected list
  cleanSelectedList(): void {
    this.selectedList = this.selectedList.filter(
      (entity) => entity && entity.trim() !== ''
    );
    this.selectedList = [];
  }
}
