import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-treinamento',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './treinamento.component.html',
  styleUrl: './treinamento.component.scss'
})
export class TreinamentoComponent {
  tituloPag = 'TREINAMENTO.TITLE';
}
