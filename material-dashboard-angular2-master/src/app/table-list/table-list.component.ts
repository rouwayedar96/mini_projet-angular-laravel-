import { Component, OnInit } from '@angular/core';
import { OffreService } from 'app/offre.service';
import { offres } from 'app/offres';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  offers:offres[];
  menus:any ;
  f=[];
  men:any;
  constructor(private off: OffreService ,private router: Router ) { }

  ngOnInit() {
    this.reloadData();
    
    
    
  }
  clickme(name:String){
    this.f.length = 0;
    this.off.getProductList().subscribe(data => {
      this.men=data.data;
      console.log(this.men)
      for(let i=0; i<data.data.length ; i++){

       console.log(data.data[i].nom)
       if(data.data[i].nom==name){
         var fr = data.data[i]
         console.log(fr)
          this.f.push(data.data[i]) 
         
       }
      }

      
    
    
    });
    
  

  }
  reloadData() {
    this.off.getProductList().subscribe(data=>{
      this.menus= data.data ;
      console.log(this.menus)
    });
  }

  deleteoffre(id: number) {
    this.off.deleteoffre(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  OffreDetails(id: number){
    this.router.navigate(['typography', id]);
  }
  offreupdates(id: number){
    this.router.navigate(['dashboard', id]);
  }


}
