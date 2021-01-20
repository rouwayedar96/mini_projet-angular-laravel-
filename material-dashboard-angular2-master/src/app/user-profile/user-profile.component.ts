import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffreService } from 'app/offre.service';
import { offres } from 'app/offres';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  Offers: offres = new offres();
  submitted = false;
  constructor(private router: Router,private off: OffreService) { }

  ngOnInit() {
  }
  newEmployee(): void {
    this.submitted = false;
    this.Offers = new offres();
  }
  save() {
    this.off
    .createoffre(this.Offers).subscribe(data => {
      console.log(data)
      this.Offers = new offres();
      this.gotoList();
    }, 
    error => console.log(error));
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  gotoList() {
    this.router.navigate(['/table-list']);
  }

}
