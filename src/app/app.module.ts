import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
//import { Ng2Webstorage, LocalStorage, LocalStorageService } from "ng2-webstorage";
import { CookieService, ANGULAR2_COOKIE_PROVIDERS } from "angular2-cookie/core";
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {EducationComponent} from "./education/education.component";
import {GuidesComponent} from "./guides/guides.component";
import {PoliciesComponent} from "./policies/policies.component";
import {ServicesComponent} from "./services/services.component";
import {DetailsComponent} from "./details/details.component";
import {EdudetailsComponent} from "./details/edudetails.component";
import {GuidedetailsComponent} from "./details/guidedetails.component";
import {PolicydetailsComponent} from "./details/policydetails.component";
import {ServicesdetailsComponent} from "./details/servicesdetails.component";
import {AppComponent} from './app.component';
import {HomeComponent} from "./home/home.component";
import { JsonpModule } from '@angular/http';
import {routing, appRoutingProviders} from './app.routing';
import {LifecycleComponent} from "./lifecycle/lifecycle.component";
import {ShowcaseComponent} from "./showcase/showcase.component";
import {SpinnerComponent} from "./spinner/spinner.component";
import {StarsComponent} from "./stars/stars.component";
import {ProductOverviewComponent} from "./productOverview/productOverview.component";
import {ProductListComponent} from "./productList/productList.component";
import {ProductDetailsComponent} from "./productDetails/productDetails.component";

@NgModule({
    declarations: [
        AppComponent,
        EducationComponent,
        GuidesComponent,
        PoliciesComponent,
        ServicesComponent,
        DetailsComponent,
        EdudetailsComponent,
        GuidedetailsComponent,
        PolicydetailsComponent,
        ServicesdetailsComponent,
        LifecycleComponent,
        ProductOverviewComponent,
        ProductListComponent,
        ProductDetailsComponent,
        ShowcaseComponent,
        HomeComponent,
        SpinnerComponent,
        StarsComponent
    ],
    imports: [
        JsonpModule,
      //  Ng2Webstorage,
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [appRoutingProviders,
                ANGULAR2_COOKIE_PROVIDERS,
                CookieService
              //  LocalStorageService
                ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
