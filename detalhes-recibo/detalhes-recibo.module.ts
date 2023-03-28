import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetalhesReciboComponent } from './detalhes-recibo.component';
import { SharedModule } from '../../../../shared/shared.module';
@NgModule({
  declarations: [DetalhesReciboComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: DetalhesReciboComponent
      },
    ]),
  ],
})
export class DetalhesReciboModule {}
