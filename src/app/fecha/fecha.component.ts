import{ Component } from "@angular/core";

@Component({    //Decorador
    selector:"app-fecha",
    templateUrl: "./fecha.component.html",  //Enlazamos ts con hatml
    styleUrls: ["./fecha.component.css"]    //Enlazamos ts con css
})

export class FechaComponent {
    hoy:object = new Date();
}