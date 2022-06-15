import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    let databox: Element= document.getElementById("data")!
    let redesbox: Element= document.getElementById("redes")!
    let databoxrigth: NodeListOf<Element>= document.querySelectorAll(".datarigth")!    

    const cargarimagen = (entries: any[], observer: any)=>{
      entries.forEach((entry:any)=>{
        if(entry.isIntersecting){
          if(entry.target.classList.contains("datarigth")){
          entry.target.classList.add("dataanimatedrigth")
        }
        else if(entry.target.getAttribute("id") == "redes"){
          entry.target.classList.add("redesanimated")
        }
        else {
          entry.target.classList.add("dataanimated")
        }
        }
      })
    }
    let observer = new IntersectionObserver(cargarimagen,{
      root: null,
      threshold: 0.10,
    });
    observer.observe(databox)
    observer.observe(redesbox)
    databoxrigth.forEach(e=> observer.observe(e))
  }
  title = 'Curriculum';
}
