import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { OffreService } from 'app/offre.service';
import { offres } from 'app/offres';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  id: number;
  offers:offres;


  constructor( private router: Router,private off: OffreService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.offers = new offres();

    this.id = this.route.snapshot.params['id'];
    
    this.off.getoffre(this.id)
      .subscribe(data => {
        console.log(data)
        this.offers = data.data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['offers']);
  }
  }


