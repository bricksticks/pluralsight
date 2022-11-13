import { Component } from "@angular/core";

// // This decorator defines what the "view" a.k.a. template is associated 
// // with the class
// @Component({
//   // this name specifies by what name to reference our component in html.
//   // Whenever we reference "pm-root" in an html file (e.g. index.html)
//   // we'll be refering to this component.
//   // See index.html in this project where the component is referenced
//   // (not as a string but as an actual html element)
//   selector: 'pm-root', 
//   // the view of the component
//   templateUrl: './app.component.html', 
//   // the stylesheet for the view
//   styleUrls: ['./app.component.css'] 
// })

// This is the type definition of our new component (i.e. the class element in the Angular architecture)
// By convention the root class is called AppComponent.
// Export defines the component to be usable by other components.
// A class can have properties and methods.
@Component({
  selector: "pm-root", // pm is the prefix specified when creating the ng create command. 
  // (probably there are better prefixes that in this example...)
  // Note how here I'm refering to an attribute in the html.
  // Typically I would probably refer to an actual html file.
  template: 
    `<div>
      <h1>
        {{pageTitle}}
      </h1>
      <div>My First Component</div>
      </div>`
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
