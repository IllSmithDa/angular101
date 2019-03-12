// import Input for passing props like in React
import { Component, OnInit, Input } from '@angular/core';
// service uses similar to flux or Redux in react
import { ExampleService }from '../example.service'


@Component({
  // used for instantiating component in other components
  selector: 'app-first-component',
  // connects to html file of component
  templateUrl: './first-component.component.html',
  // connects stylng file for component. File are designed to 
  // enforce separation of components so this css only affects this component
  styleUrls: ['./first-component.component.css']
})

// onInit runs when component is first  instantiated on the page
export class FirstComponentComponent implements OnInit {
  // this.state is not needed as well as this.setState
  myName:string = 'Sam'
  myNum: number = 23423.898
  responseData: object
  // used to prepare recieving data from other components
  @Input() exampleInput: string;
  user: string;
  // inject service as a private variable
  constructor(private example: ExampleService) { 
    

    //update the state of username directly from here or from any component
    this.example.username = 'Michael Scott';
    
    // username pulled from the example.service.username 
    this.user = this.example.username;  
  }

  // usually add server functions here so when component instantiates, the service
  // starts to get the data
  ngOnInit() {
    // using subscribe instantiates the request to get data from server. 
    // getServerData is simply a function belonging to the example service
    this.example.getServerData().subscribe((data) => {
      this.responseData = data;
    }, (err) => {
      throw err;
    })
  }

}
