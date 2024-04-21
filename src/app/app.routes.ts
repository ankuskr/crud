import { Routes } from '@angular/router';
import { UpdateComponent } from './Component/update/update.component';
import { CreateComponent } from './Component/create/create.component';
import { ListComponent } from './Component/list/list.component';

export const routes: Routes = [
    {path:'create',component:CreateComponent},
    {path:'update/:id',component:UpdateComponent},
    {path:'show',component:ListComponent},
];
