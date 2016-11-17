import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ModuleWithProviders} from "@angular/core";
import {LifecycleComponent} from "./lifecycle/lifecycle.component";
import {ShowcaseComponent} from "./showcase/showcase.component";
import {ProductListComponent} from "./productList/productList.component";
import {ProductDetailsComponent} from "./productDetails/productDetails.component";

const appRoutes:Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'lifecycle', component: LifecycleComponent},
    {path: 'showcase', component: ShowcaseComponent},
<<<<<<< HEAD
    {path: 'education', component: EducationComponent},
    {path: 'education/edudetails/:id', component: EdudetailsComponent},
    {path: 'home/details/:id', component: DetailsComponent},
    {path: 'guides', component: GuidesComponent},
    {path: 'guides/guidedetails/:id', component: GuidedetailsComponent},
    {path: 'policies', component: PoliciesComponent},
    {path: 'policies/policydetails/:id', component: PolicydetailsComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'services/servicesdetails/:id', component: ServicesdetailsComponent},
=======
    {path: 'productList/:type', component: ProductListComponent},
    {path: 'productList/:type/productDetails/:id', component: ProductDetailsComponent},
>>>>>>> b1623af9d149426790fbbedacb0e2d85685dd724
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

export const appRoutingProviders:any[] = [];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
