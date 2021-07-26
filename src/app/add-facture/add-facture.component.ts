import { FactureService } from '../Services/facture.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Facture } from '../model/facture.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-add-facture',
  templateUrl: './add-facture.component.html',
  styleUrls: ['./add-facture.component.css']
})
export class AddFactureComponent implements OnInit {

  newFacture= new Facture();
userConnect: any;
id1:any;
  constructor(private router: Router,private userService: UserService,private factureService:FactureService , private route: ActivatedRoute) { }

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods =>
      { console.log(prods);
        this.userConnect = prods;
      } );
  }
  addFacture()
  {
    this.id1 = this.route.snapshot.paramMap.get('id');
    this.factureService.ajouterFactureProjet(this.id1 ,this.newFacture).subscribe(prod=> {

      console.log(prod);

    }
    );

    this.router.navigate(['factures']).then(()=> {
      window.location.reload();
    });
  }

}
