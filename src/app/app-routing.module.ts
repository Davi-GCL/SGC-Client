import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ComponentsPageComponent } from "./routes/components-page/components-page.component";
import { MainPageComponent } from "./routes/main-page/main-page.component";

const routes: Routes = [
    {path: "", component: MainPageComponent},
    {path: "comps", component: ComponentsPageComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}