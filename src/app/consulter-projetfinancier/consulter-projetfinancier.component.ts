import { ProjetService } from '../Services/projet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from '../model/projet.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/User.service';
import { PifService } from '../Services/pif.service';
import { Pif } from '../model/pif.model';
import { PtfService } from '../Services/ptf.service';
import { Ptf } from '../model/ptf.model';
import { FactureService } from '../Services/facture.service';
import { Facture } from '../model/facture.model';
//import {DialogModule, Dialog} from 'primeng/dialog'
@Component({
  selector: 'app-consulter-projetfinancier',
  templateUrl: './consulter-projetfinancier.component.html',
  styleUrls: ['./consulter-projetfinancier.component.css'],

})
export class ConsulterProjetfinancierComponent implements OnInit {
  projets: Projet[];
  userConnect: any;
  currentProjet = new Projet();

  pifs: Pif[];
  factures:Facture[];

 ptfs: Ptf[];
  id: number;
  idDim: any;
  displayModif: boolean = false;
  id1:any;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private projetService: ProjetService
    , private pifService: PifService, private route: ActivatedRoute,
    private ptfService: PtfService,
    private factureService:FactureService) { }

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('loggedUser')).subscribe(prods => {
      console.log(prods);
      this.userConnect = prods;
    });
    this.projetService.consulterProjet(this.activatedRoute.snapshot.params.id).
      subscribe(prod => { this.currentProjet = prod; });
    this.projetService.listeProjet().subscribe(prods => {
      console.log(prods);
      this.projets = prods;
    }
    );

    this.getallpif();
    this.getallptf();
    this.getAllFacture(); 

  }
  VisualiserProjet() {
    this.projetService.visualiserProjet(this.currentProjet).subscribe(() => {
      this.router.navigate(['projets']);
    }, (error) => { alert("Problème lors de consultation de projet !"); }
    );
  }


  getallpif() {
    this.idDim = this.route.snapshot.paramMap.get('id');
    console.log("iddd")
    console.log(this.idDim)
    this.pifService.listePif(this.idDim).subscribe(data => {

      this.pifs = data;

      console.log("test");
      console.log(this.pifs);

    });

  }
  getAllFacture() {
    this.idDim = this.route.snapshot.paramMap.get('id');
    console.log("iddd")
    console.log(this.idDim)
    this.factureService.listeFactureByProjet(this.idDim).subscribe(data => {

      this.factures = data;

      console.log("factures");
      console.log(this.factures);

    });

  }

  getallptf() {
    this.idDim = this.route.snapshot.paramMap.get('id');
    console.log("iddd")
    console.log(this.idDim)
    this.ptfService.listePtf(this.idDim).subscribe(data => {

      this.ptfs = data;

      console.log("test");
      console.log(this.pifs);

    });

  }


  supprimerpif(id) {
    console.log("supp")
    console.log(id)



    if (confirm('Voulez-vous vraiment supprimer cette profil en long?')) {
      this.pifService.supprimerProjetInitial(id).subscribe
      (
        data => {
        this.getallpif();
      }
      );
    }
  }

  supprimerptf(id) {
    console.log("supp ptf")
    console.log(id)

    if (confirm('Voulez-vous vraiment supprimer cette profil en long?')) {
      this.ptfService.supprimerPlanTravail(id).subscribe(data => {
        this.getallptf();
      });
    }
  }


  supprimerFacture(id){
    console.log("supp facture")
    console.log(id)
    if (confirm('Voulez-vous vraiment supprimer cette profil en long?')) {
      this.factureService.supprimerFacture(id).subscribe(data => {
        this.getAllFacture();
      });
    }
  }


  update(id) {
    console.log(id)
    this.displayModif = true;

  }
  AjoutFacture(){
    this.id1 = this.route.snapshot.paramMap.get('id');
    
   this.router.navigate(['/add-facture/',this.id1]);

  }
  //routerLink="/plantravail-financier"
  AjoutPTF(){
    this.id1 = this.route.snapshot.paramMap.get('id');
    
   this.router.navigate(['/plantravail-financier/',this.id1]);

}
}
