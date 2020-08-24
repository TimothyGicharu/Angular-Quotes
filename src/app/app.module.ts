import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './components/quote/quote.component';
import { QuoteDetailComponent } from './components/quote-detail/quote-detail.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { TimeCountPipe } from './time-count.pipe';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { VoteComponent } from './components/vote/vote.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailComponent,
    StrikethroughDirective,
    TimeCountPipe,
    QuoteFormComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
