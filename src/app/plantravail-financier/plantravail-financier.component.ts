import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ptf } from '../model/ptf.model';
import { PtfService } from '../Services/ptf.service';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-plantravail-financier',
  templateUrl: './plantravail-financier.component.html',
  styleUrls: ['./plantravail-financier.component.css']
})
export class PlantravailFinancierComponent implements OnInit {
userConnect: any;
newpti= new Ptf();
id1:any;
  constructor(private userService: UserService,private ptiService:PtfService
    ,private route:ActivatedRoute,) { }

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods =>
      { console.log(prods);
        this.userConnect = prods;
      } );
  }

  addPti(){
  this.id1 = this.route.snapshot.paramMap.get('id');
    this.ptiService.ajouterFactureProjet(this.id1 ,this.newpti).subscribe(prod=> {

      console.log(prod);

    }
    );

   // this.router.navigate(['factures']).then(()=> {
    //  window.location.reload();
   // });

  }


}
