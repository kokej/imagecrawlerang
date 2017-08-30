import { NgModule }      		  	from '@angular/core';
import { BrowserModule } 			  from '@angular/platform-browser';
import { FormsModule } 			    from '@angular/forms';
import { HttpModule } 			    from '@angular/http';
import { AppComponent } 		    from './app.component';
import { ImageListComponent }   from './image-list/image-list.component';		
import { ImageService }         from './shared/image.service';

@NgModule({
  imports: [
  	BrowserModule,
  	FormsModule,
  	HttpModule
  ],
  declarations: [
  	AppComponent,
  	ImageListComponent,
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule {}