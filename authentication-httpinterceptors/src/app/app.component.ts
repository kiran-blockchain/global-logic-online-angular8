import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User, Role } from './_models';
import { CountryService } from './country.service';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private countrySvc: CountryService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        this.countrySvc.getCountries().subscribe(data=>{
            console.log(data);
        });
        this.countrySvc.getUsers().subscribe(data=>{
            console.log(data);
        })
    }

    get isAdmin() {
        return this.currentUser && this.currentUser.role === Role.Admin;
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}