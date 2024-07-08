import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseLayoutComponent } from '@shared/components/base-layout.component';
import { Icon } from '@shared/interfaces/icon';

@Component({
  selector: 'app-iop-list',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './iop-list.component.html',
  styleUrl: './iop-list.component.scss'
})
export class IopListComponent extends BaseLayoutComponent {
  searchIcon: Icon = { name: 'magnifying_glass', filePath: 'icons/magnifying_glass.svg'}
  value: any;
  toppings = new FormControl('');

  toppingList: string[] = ['Broj IOP-a', 'Vrsta IOP-a', 'Status IOP-a', 'Broj ugovora', 'Status ugovora', 'K1', 'Uvijeti za povrat ispunjeni'];

  constructor(
    _matIconRegistry: MatIconRegistry,
    _domSanitizer: DomSanitizer,
  ) {
    super(
      _matIconRegistry,
      _domSanitizer
    );
    this.registerIcon(this.searchIcon!.name!, this.searchIcon.filePath);
  }
}
