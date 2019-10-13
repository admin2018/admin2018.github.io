(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/employee/employee-list/employee-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employee/employee-list/employee-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h1>Employees</h1>\n    </div>\n    <div class=\"panel-body\">\n        <table class=\"table table-striped table-bordered\">\n            <thead>\n                <tr>\n                    <th>Firstname</th>\n                    <th>Téléphone</th>\n                    <th>Email</th>\n                    <th>Actions</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let employee of employees | async\">\n                    <td>{{employee.firstName}}</td>\n                    <td>{{employee.phoneNo}}</td>\n                    <td>{{employee.email}}</td>\n                    <td><button (click)=\"deleteEmployee(employee.id)\">Delete</button></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ "./src/app/employee/employee-list/employee-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/employee/employee-list/employee-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlLWxpc3QvZW1wbG95ZWUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/employee/employee-list/employee-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/employee/employee-list/employee-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee/employee.service.ts");



var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(employeeService) {
        this.employeeService = employeeService;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        this.reloadData();
    };
    EmployeeListComponent.prototype.reloadData = function () {
        this.employees = this.employeeService.getEmployeesList();
    };
    EmployeeListComponent.prototype.deleteEmployee = function (id) {
        var _this = this;
        this.employeeService.deleteEmployee(id)
            .subscribe(function (data) {
            console.log(data);
            _this.reloadData();
        }, function (error) { return console.log(error); });
    };
    EmployeeListComponent.ctorParameters = function () { return [
        { type: _employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] }
    ]; };
    EmployeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-list',
            template: __webpack_require__(/*! raw-loader!./employee-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/employee/employee-list/employee-list.component.html"),
            providers: [_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]],
            styles: [__webpack_require__(/*! ./employee-list.component.scss */ "./src/app/employee/employee-list/employee-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/employee/employee.service.ts":
/*!**********************************************!*\
  !*** ./src/app/employee/employee.service.ts ***!
  \**********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.apiUrl = '/api/employees';
    }
    EmployeeService.prototype.getEmployee = function (id) {
        return this.http.get(this.apiUrl + "/" + id);
    };
    EmployeeService.prototype.createEmployee = function (employee) {
        return this.http.post("" + this.apiUrl, employee);
    };
    EmployeeService.prototype.updateEmployee = function (id, value) {
        return this.http.put(this.apiUrl + "/" + id, value);
    };
    EmployeeService.prototype.deleteEmployee = function (id) {
        return this.http.delete(this.apiUrl + "/" + id, { responseType: 'text' });
    };
    EmployeeService.prototype.getEmployeesList = function () {
        return this.http.get("" + this.apiUrl);
    };
    EmployeeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ })

}]);
//# sourceMappingURL=common-es5.js.map