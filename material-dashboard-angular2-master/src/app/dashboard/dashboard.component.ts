import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OffreService } from 'app/offre.service';
import { offres } from 'app/offres';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  id: number;
  offers:offres;

  constructor(private route: ActivatedRoute,private router: Router,private off: OffreService) { }
  ngOnInit() {
    this.offers = new offres();

    this.id = this.route.snapshot.params['id'];
    
    this.off.getoffre(this.id)
      .subscribe(data => {
        console.log(data)
        this.offers = data;
      }, error => console.log(error));
  
    }
    updateEmployee() {
      this.off.updateoffre(this.id, this.offers)
        .subscribe(data => {
          console.log(data);
          this.offers = new offres();
          this.gotoList();
        }, error => console.log(error));
    }
    onSubmit() {
      this.updateEmployee();    
    }
  
    gotoList() {
      this.router.navigate(['/table-list']);
    }

}
