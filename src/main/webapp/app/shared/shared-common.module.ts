import { NgModule } from '@angular/core';

import { MobelhausSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [MobelhausSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [MobelhausSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MobelhausSharedCommonModule {}
