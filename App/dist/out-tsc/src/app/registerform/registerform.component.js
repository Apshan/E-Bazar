var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
var RegisterformComponent = /** @class */ (function () {
    function RegisterformComponent(fb) {
        this.fb = fb;
        this.profileForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]{8,}')]),
            email: new FormControl('', [Validators.required, Validators.email]),
            role: new FormControl('user', [Validators.required]),
            phonenumber: new FormControl('', [Validators.required, Validators.pattern('[789][0-9]{9}')])
        });
    }
    RegisterformComponent.prototype.ngOnInit = function () {
    };
    RegisterformComponent.prototype.getEmailErrorMessage = function () {
        return this.profileForm.get('email').hasError('required') ? 'You must enter a value' :
            this.profileForm.get('email').hasError('email') ? 'Not a valid email' :
                '';
    };
    RegisterformComponent.prototype.getUsernameErrorMessage = function () {
        return this.profileForm.get('name').hasError('required') ? 'you must enter a value' : '';
    };
    RegisterformComponent.prototype.getPasswordErrorMessage = function () {
        return this.profileForm.get('password').hasError('required') ? 'you must enter a value' :
            this.profileForm.get('password').value.length < 8 ? 'length should be greater than 8' :
                this.profileForm.get('password').hasError('pattern') ? '' : '';
    };
    RegisterformComponent.prototype.getRoleErrorMessage = function () {
        return this.profileForm.get('role').hasError('required') ? '' : '';
    };
    RegisterformComponent.prototype.getPhonenumberErrorMessage = function () {
        return this.profileForm.get('phonenumber').hasError('required') ? 'you must enter a value' :
            this.profileForm.get('phonenumber').hasError('pattern') ? 'pattern must match' : '';
        ;
    };
    RegisterformComponent = __decorate([
        Component({
            selector: 'app-registerform',
            templateUrl: './registerform.component.html',
            styleUrls: ['./registerform.component.css']
        }),
        __metadata("design:paramtypes", [FormBuilder])
    ], RegisterformComponent);
    return RegisterformComponent;
}());
export { RegisterformComponent };
//# sourceMappingURL=registerform.component.js.map