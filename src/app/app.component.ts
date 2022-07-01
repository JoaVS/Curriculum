import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  language!:any;
  ngOnInit(): void {
    if(localStorage.getItem('language')){
      this.language = localStorage.getItem('language')!
    }
    else {
      this.language = "spanish"
      localStorage.setItem('language','spanish')
    }
    console.log(typeof this.language)
  }
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
  changelenguaje(event:any){
    if(event.target.classList.contains("languageballleft")){
    localStorage.setItem('language','english')    
    event.target.classList.replace("languageballleft","languageballrigth")
    event.target.parentElement.classList.replace("left","rigth")
    this.language = localStorage.getItem('language')
    }
    else {
      localStorage.setItem('language','spanish')   
      event.target.classList.replace("languageballrigth","languageballleft")
      event.target.parentElement.classList.replace("rigth","left")
      this.language = localStorage.getItem('language')
    }
  }
  title = 'Curriculum';
  somethingtouched = false
  moreinfo(index:number){
    let div = (document.querySelectorAll(".moreinfodiv") as NodeListOf<HTMLDivElement>)
    this.somethingtouched = true
    div.forEach((e,i) => { div[i].style.height = "0px"; div[i].style.marginBottom = "0%"})
    if(div[index].style.height == "0px"){
      div[index].style.height = div[index].scrollHeight+"px"
      div[index].style.marginBottom = "2%"
      console.log(div[index].style.height)
    }
  }
}
