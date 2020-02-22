import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {
  MAT_DIALOG_DATA,
  MatButtonModule, MatButtonToggleModule,
  MatCardModule,
  MatDialog,
  MatDialogModule, MatIconModule, MatInputModule,
  MatMenuModule, MatStepperModule, MatTabsModule,
  MatToolbarModule, MatTreeModule
} from '@angular/material';
import { CustomTrelloComponent } from './custom-trello/custom-trello.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HeaderCardComponent } from './header-card/header-card.component';
import { InfoModalComponent } from './info-modal/info-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TutorialWizardComponent } from './tutorial-wizard/tutorial-wizard.component';
import { FileStructureComponent } from './file-structure/file-structure.component';
import { DataBindingsComponent } from './data-bindings/data-bindings.component';
import { RouteInfoComponent } from './route-info/route-info.component';
import { ExampleAComponent } from './example-a/example-a.component';
import { ExampleBComponent } from './example-b/example-b.component';
import { ExampleCComponent } from './example-c/example-c.component';
import { ExampleValueComponent } from './example-value/example-value.component';
import { SyntaxDemoComponent } from './syntax-demo/syntax-demo.component';
import { SurgeBaseComponent } from './surge-base/surge-base.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { SurgeInfoCardComponent } from './surge-base/surge-info-card/surge-info-card.component';
import { SideNavComponent } from './surge-base/side-nav/side-nav.component';
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HomeComponent,
    CustomTrelloComponent,
    HeaderCardComponent,
    InfoModalComponent,
    TutorialWizardComponent,
    FileStructureComponent,
    DataBindingsComponent,
    RouteInfoComponent,
    ExampleAComponent,
    ExampleBComponent,
    ExampleCComponent,
    ExampleValueComponent,
    SyntaxDemoComponent,
    SurgeBaseComponent,
    SurgeInfoCardComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    DragDropModule,
    MatMenuModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatTabsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatTreeModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule
  ],
  providers: [MatDialog],
  bootstrap: [AppComponent],
  entryComponents: [InfoModalComponent]
})
export class AppModule { }
