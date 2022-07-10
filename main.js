"use strict";
(self["webpackChunkmaple_check"] = self["webpackChunkmaple_check"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _state_characters_character_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state/characters/character.actions */ 535);
/* harmony import */ var _state_completedTasks_completed_task_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state/completedTasks/completed-task.actions */ 8321);
/* harmony import */ var _state_tasks_task_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/tasks/task.actions */ 639);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth/auth.service */ 1228);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/modal/modal.component */ 385);
/* harmony import */ var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/toast/toast.component */ 4356);
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/loader/loader.component */ 8868);











function AppComponent_app_loader_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-loader", 2);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", "150px");
} }
class AppComponent {
    constructor(authService, store) {
        this.authService = authService;
        this.store = store;
        this.title = 'maple-check';
    }
    ngOnInit() {
        this.authenticatedUser = this.authService.authenticatedUser;
        this.authService.authenticatedUserChanged.subscribe(user => this.authenticatedUser = user);
        this.store.dispatch((0,_state_characters_character_actions__WEBPACK_IMPORTED_MODULE_0__.loadCharacters)());
        this.store.dispatch((0,_state_completedTasks_completed_task_actions__WEBPACK_IMPORTED_MODULE_1__.loadCompletedTasks)());
        this.store.dispatch((0,_state_tasks_task_actions__WEBPACK_IMPORTED_MODULE_2__.loadTasks)());
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [["aria-live", "polite", "aria-atomic", "true"], [3, "size", 4, "ngIf"], [3, "size"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-toast", 0)(1, "app-modal")(2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AppComponent_app_loader_3_Template, 1, 1, "app-loader", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.authenticatedUser);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterOutlet, _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__.ModalComponent, _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_5__.ToastComponent, _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_icons__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-bootstrap-icons */ 7356);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _submodules_app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submodules/app.routing.module */ 8201);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-cookie-service */ 185);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth/auth.service */ 1228);
/* harmony import */ var _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/toast/toast.service */ 649);
/* harmony import */ var _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/error-handler/error-handler.service */ 3426);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _components_application_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/application.component */ 3686);
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/modal/modal.component */ 385);
/* harmony import */ var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/toast/toast.component */ 4356);
/* harmony import */ var _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/tasks/tasks.component */ 9759);
/* harmony import */ var _components_tasks_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/tasks/task-form/task-form.component */ 9254);
/* harmony import */ var _pipes_enum_to_array_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/enum-to-array/enum-to-array.pipe */ 7900);
/* harmony import */ var _components_characters_characters_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/characters/characters.component */ 5671);
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/loader/loader.component */ 8868);
/* harmony import */ var _components_characters_character_form_character_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/characters/character-form/character-form.component */ 9123);
/* harmony import */ var _components_home_character_tasks_character_tasks_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/home/character-tasks/character-tasks.component */ 6697);
/* harmony import */ var _pipes_filter_filter_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes/filter/filter.pipe */ 4014);
/* harmony import */ var _components_home_character_tasks_character_task_list_character_task_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/home/character-tasks/character-task-list/character-task-list.component */ 5370);
/* harmony import */ var _components_characters_character_list_item_character_list_item_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/characters/character-list-item/character-list-item.component */ 6050);
/* harmony import */ var _components_tasks_task_list_item_task_list_item_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/tasks/task-list-item/task-list-item.component */ 6832);
/* harmony import */ var _components_home_character_tasks_character_task_list_character_task_list_item_character_task_list_item_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/home/character-tasks/character-task-list/character-task-list-item/character-task-list-item.component */ 5069);
/* harmony import */ var _pipes_sort_sort_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pipes/sort/sort.pipe */ 201);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _state_characters_character_reducer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./state/characters/character.reducer */ 230);
/* harmony import */ var _state_characters_character_effects__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./state/characters/character.effects */ 513);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ngrx/store-devtools */ 5242);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _state_completedTasks_completed_tasks_effects__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./state/completedTasks/completed-tasks.effects */ 5238);
/* harmony import */ var _state_completedTasks_completed_task_reducer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./state/completedTasks/completed-task.reducer */ 6326);
/* harmony import */ var _state_tasks_task_reducer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./state/tasks/task.reducer */ 1194);
/* harmony import */ var _state_tasks_task_effects__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./state/tasks/task.effects */ 5855);
/* harmony import */ var _components_leveling_leveling_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/leveling/leveling.component */ 2093);

//Imports






//Providers




//Declarations



































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_32__.ErrorHandler,
            useClass: _services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_3__.ErrorHandlerService
        },
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_33__.CookieService,
        _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService,
        _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_34__.BrowserModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_35__.NgbModule,
        _submodules_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_36__.FormsModule,
        ngx_bootstrap_icons__WEBPACK_IMPORTED_MODULE_37__.NgxBootstrapIconsModule.pick(ngx_bootstrap_icons__WEBPACK_IMPORTED_MODULE_37__.allIcons),
        _ngrx_store__WEBPACK_IMPORTED_MODULE_38__.StoreModule.forRoot({
            characters: _state_characters_character_reducer__WEBPACK_IMPORTED_MODULE_24__.characterReducer,
            completedTasks: _state_completedTasks_completed_task_reducer__WEBPACK_IMPORTED_MODULE_28__.completedTaskReducer,
            tasks: _state_tasks_task_reducer__WEBPACK_IMPORTED_MODULE_29__.taskReducer
        }, {}),
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_39__.EffectsModule.forRoot([
            _state_characters_character_effects__WEBPACK_IMPORTED_MODULE_25__.CharacterEffects,
            _state_completedTasks_completed_tasks_effects__WEBPACK_IMPORTED_MODULE_27__.CompletedTaskEffects,
            _state_tasks_task_effects__WEBPACK_IMPORTED_MODULE_30__.TaskEffects
        ]),
        _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_40__.StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_26__.environment.production })] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent,
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__.LoginComponent,
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__.HomeComponent,
        _components_application_component__WEBPACK_IMPORTED_MODULE_8__.ApplicationComponent,
        _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__.ModalComponent,
        _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_10__.ToastComponent,
        _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_11__.TasksComponent,
        _components_tasks_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_12__.TaskFormComponent,
        _pipes_enum_to_array_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_13__.EnumToArrayPipe,
        _components_characters_characters_component__WEBPACK_IMPORTED_MODULE_14__.CharactersComponent,
        _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_15__.LoaderComponent,
        _components_characters_character_form_character_form_component__WEBPACK_IMPORTED_MODULE_16__.CharacterFormComponent,
        _components_home_character_tasks_character_tasks_component__WEBPACK_IMPORTED_MODULE_17__.CharacterTasksComponent,
        _pipes_filter_filter_pipe__WEBPACK_IMPORTED_MODULE_18__.FilterPipe,
        _components_home_character_tasks_character_task_list_character_task_list_component__WEBPACK_IMPORTED_MODULE_19__.CharacterTaskListComponent,
        _components_home_character_tasks_character_task_list_character_task_list_item_character_task_list_item_component__WEBPACK_IMPORTED_MODULE_22__.CharacterTaskListItemComponent,
        _components_characters_character_list_item_character_list_item_component__WEBPACK_IMPORTED_MODULE_20__.CharacterListItemComponent,
        _components_tasks_task_list_item_task_list_item_component__WEBPACK_IMPORTED_MODULE_21__.TaskListItemComponent,
        _pipes_sort_sort_pipe__WEBPACK_IMPORTED_MODULE_23__.SortPipe,
        _components_leveling_leveling_component__WEBPACK_IMPORTED_MODULE_31__.LevelingComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_34__.BrowserModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_35__.NgbModule,
        _submodules_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_36__.FormsModule, ngx_bootstrap_icons__WEBPACK_IMPORTED_MODULE_37__.NgxBootstrapIconsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_38__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_39__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_40__.StoreDevtoolsModule] }); })();


/***/ }),

/***/ 3686:
/*!*****************************************************!*\
  !*** ./src/app/components/application.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationComponent": () => (/* binding */ ApplicationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3646);



class ApplicationComponent {
    constructor() { }
    ngOnInit() {
    }
}
ApplicationComponent.ɵfac = function ApplicationComponent_Factory(t) { return new (t || ApplicationComponent)(); };
ApplicationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ApplicationComponent, selectors: [["app-application"]], decls: 2, vars: 0, template: function ApplicationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header")(1, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBsaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9123:
/*!**********************************************************************************!*\
  !*** ./src/app/components/characters/character-form/character-form.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharacterFormComponent": () => (/* binding */ CharacterFormComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_models_Character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/Character */ 4080);
/* harmony import */ var src_app_state_characters_character_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/state/characters/character.actions */ 535);
/* harmony import */ var src_app_state_characters_character_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/state/characters/character.selector */ 3477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../loader/loader.component */ 8868);











function CharacterFormComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function CharacterFormComponent_div_0_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 5)(4, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CharacterFormComponent_div_0_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.character.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 8)(8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.character.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", _r3.form.invalid);
  }
}

function CharacterFormComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-loader", 11);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("size", "150px");
  }
}

class CharacterFormComponent {
  constructor(activatedRoute, router, store) {
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.store = store;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let id = params["id"];

      if (id) {
        console.log("We editin");
        this.editCharacter$ = this.store.select((0,src_app_state_characters_character_selector__WEBPACK_IMPORTED_MODULE_3__.selectCharacter)(id));
        this.editCharacter$.subscribe(char => this.character = { ...char
        });
      } else {
        console.log("We creatin");
        this.character = new src_app_models_Character__WEBPACK_IMPORTED_MODULE_1__.Character();
      }
    });
  }

  save() {
    var _this = this;

    return (0,_home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.character._id) {
        _this.store.dispatch((0,src_app_state_characters_character_actions__WEBPACK_IMPORTED_MODULE_2__.updateCharacter)({
          character: _this.character
        }));
      } else {
        _this.store.dispatch((0,src_app_state_characters_character_actions__WEBPACK_IMPORTED_MODULE_2__.addCharacter)({
          character: _this.character
        }));
      }

      _this.router.navigate(["characters"]);
    })();
  }

}

CharacterFormComponent.ɵfac = function CharacterFormComponent_Factory(t) {
  return new (t || CharacterFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store));
};

CharacterFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: CharacterFormComponent,
  selectors: [["app-character-form"]],
  decls: 3,
  vars: 2,
  consts: [["class", "container", 4, "ngIf", "ngIfElse"], ["loader", ""], [1, "container"], [3, "ngSubmit"], ["classForm", "ngForm"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "placeholder", "Character name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "float-right"], ["type", "button", "routerLink", "/characters", 1, "btn", "btn-secondary"], ["type", "submit", 1, "btn", "btn-success", "ml-2", 3, "disabled"], [3, "size"]],
  template: function CharacterFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CharacterFormComponent_div_0_Template, 12, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CharacterFormComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.character)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _loader_loader_component__WEBPACK_IMPORTED_MODULE_4__.LoaderComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFyYWN0ZXItZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 6050:
/*!********************************************************************************************!*\
  !*** ./src/app/components/characters/character-list-item/character-list-item.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharacterListItemComponent": () => (/* binding */ CharacterListItemComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_state_characters_character_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/state/characters/character.actions */ 535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





const _c0 = ["app-character-list-item", ""];

const _c1 = function (a1) {
  return ["edit", a1];
};

class CharacterListItemComponent {
  constructor(store) {
    this.store = store;
  }

  ngOnInit() {}

  delete(characterId) {
    var _this = this;

    return (0,_home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.store.dispatch((0,src_app_state_characters_character_actions__WEBPACK_IMPORTED_MODULE_1__.deleteCharacter)({
        id: characterId
      }));
    })();
  }

}

CharacterListItemComponent.ɵfac = function CharacterListItemComponent_Factory(t) {
  return new (t || CharacterListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store));
};

CharacterListItemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CharacterListItemComponent,
  selectors: [["", "app-character-list-item", ""]],
  inputs: {
    character: "character"
  },
  attrs: _c0,
  decls: 8,
  vars: 4,
  consts: [[3, "routerLink"], ["role", "button", 1, "text-danger", 3, "click"]],
  template: function CharacterListItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "td")(3, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " | ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CharacterListItemComponent_Template_a_click_6_listener() {
        return ctx.delete(ctx.character._id);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.character.name, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, ctx.character._id));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFyYWN0ZXItbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 5671:
/*!***************************************************************!*\
  !*** ./src/app/components/characters/characters.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharactersComponent": () => (/* binding */ CharactersComponent)
/* harmony export */ });
/* harmony import */ var src_app_state_characters_character_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/state/characters/character.selector */ 3477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loader/loader.component */ 8868);
/* harmony import */ var _character_list_item_character_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./character-list-item/character-list-item.component */ 6050);








function CharactersComponent_table_6_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 7);
  }

  if (rf & 2) {
    const char_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("character", char_r4);
  }
}

function CharactersComponent_table_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 5)(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, CharactersComponent_table_6_tr_8_Template, 1, 1, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 1, ctx_r0.characters$));
  }
}

function CharactersComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-loader", 8);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", "150px");
  }
}

class CharactersComponent {
  constructor(store) {
    this.store = store;
    this.characters$ = this.store.select(src_app_state_characters_character_selector__WEBPACK_IMPORTED_MODULE_0__.selectAllCharacters);
    this.charactersStatus$ = this.store.select(src_app_state_characters_character_selector__WEBPACK_IMPORTED_MODULE_0__.selectCharacterStateStatus);
  }

  ngOnInit() {}

}

CharactersComponent.ɵfac = function CharactersComponent_Factory(t) {
  return new (t || CharactersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
};

CharactersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CharactersComponent,
  selectors: [["app-characters"]],
  decls: 10,
  vars: 4,
  consts: [[1, "container"], ["routerLink", "new", 1, "btn", "btn-primary", "bottom-right-floating-button"], [1, "d-flex", "mb-3"], ["class", "table table-striped", 4, "ngIf", "ngIfElse"], ["loader", ""], [1, "table", "table-striped"], ["app-character-list-item", "", 3, "character", 4, "ngFor", "ngForOf"], ["app-character-list-item", "", 3, "character"], [3, "size"]],
  template: function CharactersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "New character");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Characters");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CharactersComponent_table_6_Template, 10, 3, "table", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, CharactersComponent_ng_template_8_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 2, ctx.charactersStatus$) == "success")("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent, _character_list_item_character_list_item_component__WEBPACK_IMPORTED_MODULE_2__.CharacterListItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFyYWN0ZXJzLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 1228);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);




class HeaderComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.Username = this.authService.authenticatedUser.name;
    }
    logout() {
        this.authService.logout();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 23, vars: 6, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-primary", "sticky-top"], ["ngbNav", "", 1, "navbar-nav", 3, "activeId"], ["ngbNavItem", "", 1, "nav-item", 3, "ngbNavItem"], ["ngbNavLink", "", "routerLink", "home", 1, "navbar-brand"], ["ngbNavLink", "", "routerLink", "characters", 1, "nav-link"], ["ngbNavLink", "", "routerLink", "tasks", 1, "nav-link"], ["ngbNavLink", "", "routerLink", "leveling", 1, "nav-link"], [1, "ml-auto"], [1, "navbar-nav"], ["ngbDropdown", "", 1, "nav-item", "dropdown"], ["role", "button", "ngbDropdownToggle", "", "data-toggle", "dropdown", 1, "nav-link", "dropdown-toggle"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-right"], ["ngbDropdownItem", "", "role", "button", 1, "dropdown-item", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div")(2, "ul", 1)(3, "li", 2)(4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Maple Check");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 2)(7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Characters");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 2)(10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 2)(13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Leveling");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7)(16, "ul", 8)(17, "li", 9)(18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11)(21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_21_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeId", ctx.router.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", "/home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", "/characters");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", "/tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", "/leveling");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.Username);
    } }, dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavbar, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5069:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/components/home/character-tasks/character-task-list/character-task-list-item/character-task-list-item.component.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharacterTaskListItemComponent": () => (/* binding */ CharacterTaskListItemComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_state_characters_character_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/state/characters/character.actions */ 535);
/* harmony import */ var src_app_state_completedTasks_completed_task_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/state/completedTasks/completed-task.actions */ 8321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_bootstrap_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap-icons */ 7356);







const _c0 = ["app-character-task-list-item", ""];

function CharacterTaskListItemComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CharacterTaskListItemComponent_div_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.toggleComplete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function CharacterTaskListItemComponent_td_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r1.task.complete);
  }
}

function CharacterTaskListItemComponent_td_6_i_bs_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i-bs", 12);
  }
}

function CharacterTaskListItemComponent_td_6_i_bs_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i-bs", 13);
  }
}

function CharacterTaskListItemComponent_td_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 8)(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CharacterTaskListItemComponent_td_6_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.toggleHiddenState());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CharacterTaskListItemComponent_td_6_i_bs_2_Template, 1, 0, "i-bs", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CharacterTaskListItemComponent_td_6_i_bs_3_Template, 1, 0, "i-bs", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.task.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.task.hidden);
  }
}

class CharacterTaskListItemComponent {
  constructor(store) {
    this.store = store;
  }

  ngOnInit() {}

  toggleComplete() {
    var _this = this;

    return (0,_home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.task.complete) {
        _this.store.dispatch((0,src_app_state_completedTasks_completed_task_actions__WEBPACK_IMPORTED_MODULE_2__.setIncomplete)({
          characterId: _this.character._id,
          taskId: _this.task._id
        }));
      } else {
        _this.store.dispatch((0,src_app_state_completedTasks_completed_task_actions__WEBPACK_IMPORTED_MODULE_2__.setComplete)({
          characterId: _this.character._id,
          taskId: _this.task._id
        }));
      }
    })();
  }

  toggleHiddenState() {
    this.store.dispatch((0,src_app_state_characters_character_actions__WEBPACK_IMPORTED_MODULE_1__.hideTask)({
      characterId: this.character._id,
      taskId: this.task._id,
      hidden: !this.task.hidden
    }));
  }

}

CharacterTaskListItemComponent.ɵfac = function CharacterTaskListItemComponent_Factory(t) {
  return new (t || CharacterTaskListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
};

CharacterTaskListItemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CharacterTaskListItemComponent,
  selectors: [["", "app-character-task-list-item", ""]],
  inputs: {
    task: "task",
    character: "character",
    editMode: "editMode"
  },
  attrs: _c0,
  decls: 7,
  vars: 5,
  consts: [["class", "overlay", 3, "click", 4, "ngIf"], [1, "task-image-td"], [1, "task-image", 3, "src"], ["class", "checkbox-td", 4, "ngIf"], ["class", "text-right p-1", 4, "ngIf"], [1, "overlay", 3, "click"], [1, "checkbox-td"], ["type", "checkbox", 1, "", 3, "checked"], [1, "text-right", "p-1"], ["role", "button", 1, "btn", "btn-light", 3, "click"], ["class", "text-danger", "name", "eye-slash-fill", 4, "ngIf"], ["name", "eye-fill", 4, "ngIf"], ["name", "eye-slash-fill", 1, "text-danger"], ["name", "eye-fill"]],
  template: function CharacterTaskListItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CharacterTaskListItemComponent_div_0_Template, 1, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CharacterTaskListItemComponent_td_5_Template, 2, 1, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CharacterTaskListItemComponent_td_6_Template, 4, 2, "td", 4);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.task.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.task.name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.editMode);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ngx_bootstrap_icons__WEBPACK_IMPORTED_MODULE_6__.NgxBootstrapIconsLibComponent],
  styles: [".overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n\n.checkbox-td[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\n.task-image-td[_ngcontent-%COMP%] {\n  width: 50px;\n  padding: 0px;\n}\n\n.task-image[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJhY3Rlci10YXNrLWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6ImNoYXJhY3Rlci10YXNrLWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNoZWNrYm94LXRkIHtcbiAgICB3aWR0aDogNTBweDtcbn1cblxuLnRhc2staW1hZ2UtdGQge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLnRhc2staW1hZ2Uge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn0iXX0= */"]
});

/***/ }),

/***/ 5370:
/*!******************************************************************************************************!*\
  !*** ./src/app/components/home/character-tasks/character-task-list/character-task-list.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharacterTaskListComponent": () => (/* binding */ CharacterTaskListComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! array-move */ 7789);
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(array_move__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_state_characters_character_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/state/characters/character.actions */ 535);
/* harmony import */ var src_app_state_completedTasks_completed_task_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/state/completedTasks/completed-task.selector */ 959);
/* harmony import */ var src_app_state_tasks_task_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/state/tasks/task.selector */ 801);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var ngx_bootstrap_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap-icons */ 7356);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../loader/loader.component */ 8868);
/* harmony import */ var _character_task_list_item_character_task_list_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./character-task-list-item/character-task-list-item.component */ 5069);
/* harmony import */ var _pipes_filter_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../pipes/filter/filter.pipe */ 4014);














function CharacterTaskListComponent_i_bs_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i-bs", 12);
  }
}

function CharacterTaskListComponent_i_bs_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i-bs", 13);
  }
}

function CharacterTaskListComponent_a_9_i_bs_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i-bs", 17);
  }
}

function CharacterTaskListComponent_a_9_i_bs_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i-bs", 18);
  }
}

function CharacterTaskListComponent_a_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CharacterTaskListComponent_a_9_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r9.toggleEditMode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CharacterTaskListComponent_a_9_i_bs_1_Template, 1, 0, "i-bs", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CharacterTaskListComponent_a_9_i_bs_2_Template, 1, 0, "i-bs", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r2.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.editMode);
  }
}

function CharacterTaskListComponent_div_13_tbody_2_ng_container_1_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 25);
  }

  if (rf & 2) {
    const task_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("task", task_r15)("character", ctx_r16.character)("editMode", ctx_r16.editMode);
  }
}

function CharacterTaskListComponent_div_13_tbody_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CharacterTaskListComponent_div_13_tbody_2_ng_container_1_tr_1_Template, 1, 3, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const task_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !task_r15.hidden || ctx_r14.editMode);
  }
}

const _c0 = function () {
  return {
    complete: false
  };
};

function CharacterTaskListComponent_div_13_tbody_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CharacterTaskListComponent_div_13_tbody_2_ng_container_1_Template, 2, 1, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 1, ctx_r11.tasks, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](4, _c0)));
  }
}

function CharacterTaskListComponent_div_13_tbody_3_ng_container_1_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 25);
  }

  if (rf & 2) {
    const task_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("task", task_r19)("character", ctx_r20.character)("editMode", ctx_r20.editMode);
  }
}

function CharacterTaskListComponent_div_13_tbody_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CharacterTaskListComponent_div_13_tbody_3_ng_container_1_tr_1_Template, 1, 3, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const task_r19 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !task_r19.hidden || ctx_r18.editMode);
  }
}

const _c1 = function () {
  return {
    complete: true
  };
};

function CharacterTaskListComponent_div_13_tbody_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tbody", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CharacterTaskListComponent_div_13_tbody_3_ng_container_1_Template, 2, 1, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 1, ctx_r12.tasks, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](4, _c1)));
  }
}

function CharacterTaskListComponent_div_13_tbody_4_ng_container_1_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("dragstart", function CharacterTaskListComponent_div_13_tbody_4_ng_container_1_tr_1_Template_tr_dragstart_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28);
      const index_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r26.onDragStart(index_r24));
    })("dragenter", function CharacterTaskListComponent_div_13_tbody_4_ng_container_1_tr_1_Template_tr_dragenter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28);
      const index_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r29.onDragEnter(index_r24));
    })("dragend", function CharacterTaskListComponent_div_13_tbody_4_ng_container_1_tr_1_Template_tr_dragend_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r31.onDragEnd());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const task_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("task", task_r23)("character", ctx_r25.character)("editMode", ctx_r25.editMode)("draggable", true);
  }
}

function CharacterTaskListComponent_div_13_tbody_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CharacterTaskListComponent_div_13_tbody_4_ng_container_1_tr_1_Template, 1, 4, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const task_r23 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !task_r23.hidden || ctx_r22.editMode);
  }
}

function CharacterTaskListComponent_div_13_tbody_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CharacterTaskListComponent_div_13_tbody_4_ng_container_1_Template, 2, 1, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("dragging", ctx_r13.draggingIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r13.tasks);
  }
}

function CharacterTaskListComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CharacterTaskListComponent_div_13_tbody_2_Template, 3, 5, "tbody", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CharacterTaskListComponent_div_13_tbody_3_Template, 3, 5, "tbody", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, CharacterTaskListComponent_div_13_tbody_4_Template, 2, 3, "tbody", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r4.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r4.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r4.editMode);
  }
}

function CharacterTaskListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-loader", 29);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("size", "150px");
  }
}

class CharacterTaskListComponent {
  constructor(store) {
    this.store = store;
    this.taskStateStatus$ = this.store.select(src_app_state_tasks_task_selector__WEBPACK_IMPORTED_MODULE_4__.selectTaskStateStatus);
    this.completedTaskStateStatus$ = this.store.select(src_app_state_completedTasks_completed_task_selector__WEBPACK_IMPORTED_MODULE_3__.selectCompletedTaskStateStatus);
    this.isCollapsed = false;
  }

  ngOnChanges(changes) {
    this.tasks$ = this.store.select((0,src_app_state_tasks_task_selector__WEBPACK_IMPORTED_MODULE_4__.selectCharacterTasks)(this.character._id, this.type, this.repeats));
    this.tasks$.subscribe(tasks => this.tasks = tasks);
  }

  toggleEditMode() {
    var _this = this;

    return (0,_home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.editMode) _this.store.dispatch((0,src_app_state_characters_character_actions__WEBPACK_IMPORTED_MODULE_2__.updateTaskPriorities)({
        characterId: _this.character._id,
        tasks: _this.tasks
      }));
      _this.editMode = !_this.editMode;
    })();
  }

  onDragStart(fromIndex) {
    this.draggingIndex = fromIndex;
  }

  onDragEnter(toIndex) {
    if (this.draggingIndex !== toIndex) {
      this.tasks = array_move__WEBPACK_IMPORTED_MODULE_1__(this.tasks, this.draggingIndex, toIndex);
      this.draggingIndex = toIndex;
    }
  }

  onDragEnd() {
    this.draggingIndex = undefined;
  }

}

CharacterTaskListComponent.ɵfac = function CharacterTaskListComponent_Factory(t) {
  return new (t || CharacterTaskListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store));
};

CharacterTaskListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: CharacterTaskListComponent,
  selectors: [["app-character-task-list"]],
  inputs: {
    character: "character",
    label: "label",
    type: "type",
    repeats: "repeats"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]],
  decls: 18,
  vars: 11,
  consts: [[1, "card", "mt-4"], [1, "card-body", "p-2"], ["role", "button", 1, "m-2", 3, "click"], [1, "mr-1"], ["name", "chevron-down", 4, "ngIf"], ["name", "chevron-up", 4, "ngIf"], [1, "float-right"], ["class", "btn btn-light", "role", "button", 3, "click", 4, "ngIf"], [3, "ngbCollapse", "ngbCollapseChange"], ["collapse", "ngbCollapse"], [4, "ngIf", "ngIfElse"], ["loader", ""], ["name", "chevron-down"], ["name", "chevron-up"], ["role", "button", 1, "btn", "btn-light", 3, "click"], ["name", "pencil-square", 4, "ngIf"], ["class", "text-success", "name", "check-circle-fill", 4, "ngIf"], ["name", "pencil-square"], ["name", "check-circle-fill", 1, "text-success"], [1, "table", "table-hover", "mt-1"], [4, "ngIf"], ["class", "complete-table", 4, "ngIf"], [3, "dragging", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["app-character-task-list-item", "", "class", "task-row", 3, "task", "character", "editMode", 4, "ngIf"], ["app-character-task-list-item", "", 1, "task-row", 3, "task", "character", "editMode"], [1, "complete-table"], ["app-character-task-list-item", "", "class", "task-row draggable", 3, "task", "character", "editMode", "draggable", "dragstart", "dragenter", "dragend", 4, "ngIf"], ["app-character-task-list-item", "", 1, "task-row", "draggable", 3, "task", "character", "editMode", "draggable", "dragstart", "dragenter", "dragend"], [3, "size"]],
  template: function CharacterTaskListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CharacterTaskListComponent_Template_label_click_3_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33);

        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](11);

        return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r3.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "b", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, CharacterTaskListComponent_i_bs_6_Template, 1, 0, "i-bs", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, CharacterTaskListComponent_i_bs_7_Template, 1, 0, "i-bs", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, CharacterTaskListComponent_a_9_Template, 3, 2, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngbCollapseChange", function CharacterTaskListComponent_Template_div_ngbCollapseChange_10_listener($event) {
        return ctx.isCollapsed = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, CharacterTaskListComponent_div_13_Template, 5, 3, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, CharacterTaskListComponent_ng_template_16_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](17);

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.label);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 7, ctx.taskStateStatus$) == "success" && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 9, ctx.completedTaskStateStatus$) == "success")("ngIfElse", _r5);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbCollapse, ngx_bootstrap_icons__WEBPACK_IMPORTED_MODULE_12__.NgxBootstrapIconsLibComponent, _loader_loader_component__WEBPACK_IMPORTED_MODULE_5__.LoaderComponent, _character_task_list_item_character_task_list_item_component__WEBPACK_IMPORTED_MODULE_6__.CharacterTaskListItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _pipes_filter_filter_pipe__WEBPACK_IMPORTED_MODULE_7__.FilterPipe],
  styles: [".task-row[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.complete-table[_ngcontent-%COMP%] {\n  opacity: 60%;\n}\n\n.draggable[_ngcontent-%COMP%] {\n  cursor: grab;\n}\n\n.draggable[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJhY3Rlci10YXNrLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUNJO0VBQ0ksZ0JBQUE7QUFDUiIsImZpbGUiOiJjaGFyYWN0ZXItdGFzay1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhc2stcm93IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb21wbGV0ZS10YWJsZSB7XG4gICAgb3BhY2l0eTogNjAlO1xufVxuXG4uZHJhZ2dhYmxlIHtcbiAgICBjdXJzb3I6IGdyYWI7XG4gICAgXG4gICAgJjphY3RpdmUgeyBcbiAgICAgICAgY3Vyc29yOiBncmFiYmluZztcbiAgICB9XG59XG5cblxuIl19 */"]
});

/***/ }),

/***/ 6697:
/*!******************************************************************************!*\
  !*** ./src/app/components/home/character-tasks/character-tasks.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharacterTasksComponent": () => (/* binding */ CharacterTasksComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5670);
/* harmony import */ var src_app_state_characters_character_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/state/characters/character.selector */ 3477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _character_task_list_character_task_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character-task-list/character-task-list.component */ 5370);








function CharacterTasksComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "h1", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-character-task-list", 2)(4, "app-character-task-list", 2)(5, "app-character-task-list", 2)(6, "app-character-task-list", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const character_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", character_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "Daily quests")("character", character_r1)("type", "QUEST")("repeats", "DAILY");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "Daily bosses")("character", character_r1)("type", "BOSS")("repeats", "DAILY");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "Weekly quests")("character", character_r1)("type", "QUEST")("repeats", "WEEKLY");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "Weekly bosses")("character", character_r1)("type", "BOSS")("repeats", "WEEKLY");
  }
}

class CharacterTasksComponent {
  constructor(store, activatedRoute, router) {
    this.store = store;
    this.activatedRoute = activatedRoute;
    this.router = router;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let charId = params["id"];

      if (charId) {
        this.character$ = this.store.select((0,src_app_state_characters_character_selector__WEBPACK_IMPORTED_MODULE_0__.selectCharacter)(charId));
      } else {
        //no char id parameter, find first and redirect;
        this.store.select(src_app_state_characters_character_selector__WEBPACK_IMPORTED_MODULE_0__.selectAllCharacters).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.first)()).subscribe(chars => {
          if (chars?.length > 0) {
            this.router.navigate(["home", chars[0]._id]);
          }
        });
      }
    });
  }

}

CharacterTasksComponent.ɵfac = function CharacterTasksComponent_Factory(t) {
  return new (t || CharacterTasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};

CharacterTasksComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CharacterTasksComponent,
  selectors: [["app-character-tasks"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], [1, "m-2"], [3, "label", "character", "type", "repeats"]],
  template: function CharacterTasksComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CharacterTasksComponent_div_0_Template, 7, 17, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.character$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _character_task_list_character_task_list_component__WEBPACK_IMPORTED_MODULE_1__.CharacterTaskListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFyYWN0ZXItdGFza3MuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 8263:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var src_app_state_characters_character_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/state/characters/character.selector */ 3477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loader/loader.component */ 8868);








const _c0 = function () {
  return ["active"];
};

function HomeComponent_div_0_div_1_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 10)(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const character_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", character_r7._id)("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](character_r7.name);
  }
}

function HomeComponent_div_0_div_1_h3_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No characters registered.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function HomeComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "nav")(3, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, HomeComponent_div_0_div_1_li_4_Template, 3, 4, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, HomeComponent_div_0_div_1_h3_7_Template, 2, 0, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const characters_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", characters_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (characters_r4 == null ? null : characters_r4.length) == 0);
  }
}

function HomeComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_div_0_div_1_Template, 8, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r0.characters$));
  }
}

function HomeComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-loader", 13);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("size", "150px");
  }
}

class HomeComponent {
  constructor(store) {
    this.store = store;
    this.characters$ = this.store.select(src_app_state_characters_character_selector__WEBPACK_IMPORTED_MODULE_0__.selectAllCharacters);
    this.charactersStatus$ = this.store.select(src_app_state_characters_character_selector__WEBPACK_IMPORTED_MODULE_0__.selectCharacterStateStatus);
  }

  ngOnInit() {}

}

HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store));
};

HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 4,
  vars: 4,
  consts: [["class", "container-fluid", 4, "ngIf", "ngIfElse"], ["loader", ""], [1, "container-fluid"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-2", "sidebar", "pt-2"], ["ngbNav", "", 1, "nav", "flex-column", "nav-pills"], ["ngbNavItem", "", "class", "nav-item", 4, "ngFor", "ngForOf"], [1, "col", "bg-light"], ["class", "m-2", 4, "ngIf"], ["ngbNavItem", "", 1, "nav-item"], [1, "nav-link", 3, "routerLink", "routerLinkActive"], [1, "m-2"], [3, "size"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 3, 3, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HomeComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx.charactersStatus$) == "success")("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavItem, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
  styles: [".sidebar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 3.5rem;\n  z-index: 1000;\n  height: calc(100vh - 3.5rem);\n  overflow-y: auto;\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.nav-link.active[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.1) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQ0FBQTtBQUNKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhciB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDMuNXJlbTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDMuNXJlbSk7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xKTtcbn1cblxuLnNpZGViYXIgYSB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4ubmF2LWxpbmsuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xufSJdfQ== */"]
});

/***/ }),

/***/ 2093:
/*!***********************************************************!*\
  !*** ./src/app/components/leveling/leveling.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LevelingComponent": () => (/* binding */ LevelingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LevelingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LevelingComponent.ɵfac = function LevelingComponent_Factory(t) { return new (t || LevelingComponent)(); };
LevelingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LevelingComponent, selectors: [["app-leveling"]], decls: 65, vars: 0, consts: [[1, "container"], ["id", "link-skills", "type", "checkbox"], ["for", "link-skills"], ["id", "legion-grid", "type", "checkbox"], ["for", "legion-grid"], ["id", "hyper-stats", "type", "checkbox"], ["for", "hyper-stats"], ["id", "guild-skill", "type", "checkbox"], ["for", "guild-skill"], ["id", "familiar", "type", "checkbox"], ["for", "familiar"], ["id", "2x-coupon", "type", "checkbox"], ["for", "2x-coupon"], ["id", "exp-accumulation", "type", "checkbox"], ["for", "exp-accumulation"], ["id", "monster-park", "type", "checkbox"], ["for", "monster-park"], ["id", "legion-attack", "type", "checkbox"], ["for", "legion-attack"], ["id", "guild-attack", "type", "checkbox"], ["for", "guild-attack"], ["id", "mvp-damage-coupon", "type", "checkbox"], ["for", "mvp-damage-coupon"], ["id", "pendant-of-the-spirit", "type", "checkbox"], ["for", "pendant-of-the-spirit"], ["id", "wild-totem", "type", "checkbox"], ["for", "wild-totem"], ["id", "drop-items", "type", "checkbox"], ["for", "drop-items"]], template: function LevelingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Leveling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Passive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Link skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br")(9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Legion grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br")(13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Hyper stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br")(17, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "101 to 200 passive guild skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br")(21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Drop/Meso drop Familiars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Buffs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "2x coupon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " - If between level 100 and 180, use legion growth potion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "EXP accumulation potion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br")(37, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Monster park boost potions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br")(41, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Legion attack buff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br")(45, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Guild attack buff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br")(49, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "MVP damage coupon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Equip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Pendant of the spirit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br")(59, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Wild totem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Drop/Meso drop items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["input[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldmVsaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJsZXZlbGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */"] });


/***/ }),

/***/ 8868:
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderComponent": () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], inputs: { size: "size" }, decls: 1, vars: 4, consts: [[1, "loader"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.size)("height", ctx.size);
    } }, styles: [".loader[_ngcontent-%COMP%] {\n  border: 5pt solid #f3f3f3;\n  \n  border-top: 5pt solid #3498db;\n  \n  border-radius: 50%;\n  animation: spin 2s linear infinite;\n  margin: auto;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLHVCQUFBO0VBQ047RUFDRTtJQUNJLHlCQUFBO0VBQ047QUFDRiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyIHtcbiAgICBib3JkZXI6IDVwdCBzb2xpZCAjZjNmM2YzO1xuICAgIC8qIExpZ2h0IGdyZXkgKi9cbiAgICBib3JkZXItdG9wOiA1cHQgc29saWQgIzM0OThkYjtcbiAgICAvKiBCbHVlICovXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 7143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 1228);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.authService.fetchLoginUrl()
            .then((url) => {
            this.loginUrl = url;
        });
    }
    signIn() {
        location.href = this.loginUrl;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 1, consts: [[3, "disabled", "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_0_listener() { return ctx.signIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Sign in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loginUrl == undefined);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 385:
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var src_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/modal/modal.service */ 9493);



const _c0 = ["content"];
function ModalComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "h4", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalComponent_ng_template_0_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const modal_r2 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r2.dismiss()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalComponent_ng_template_0_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const modal_r2 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r2.close()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.contentText);
} }
class ModalComponent {
    constructor(ngbModal, modalService) {
        this.ngbModal = ngbModal;
        this.modalService = modalService;
    }
    ngOnInit() {
        this.modalService.modalEvents.on("open", (info) => {
            this.title = info.title;
            this.contentText = info.content;
            const modalRef = this.ngbModal.open(this.modalContent);
        });
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_0__.ModalService)); };
ModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], viewQuery: function ModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modalContent = _t.first);
    } }, decls: 2, vars: 0, consts: [["content", ""], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["ngbAutofocus", "", "type", "button", 1, "btn", "btn-outline-dark", 3, "click"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ModalComponent_ng_template_0_Template, 12, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9254:
/*!*******************************************************************!*\
  !*** ./src/app/components/tasks/task-form/task-form.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskFormComponent": () => (/* binding */ TaskFormComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_enums_task_repeats_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums/task-repeats.enum */ 7577);
/* harmony import */ var src_app_enums_task_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/enums/task-type.enum */ 6628);
/* harmony import */ var src_app_models_Task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/Task */ 1497);
/* harmony import */ var src_app_state_tasks_task_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/state/tasks/task.actions */ 639);
/* harmony import */ var src_app_state_tasks_task_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/state/tasks/task.selector */ 801);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _pipes_enum_to_array_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../pipes/enum-to-array/enum-to-array.pipe */ 7900);













function TaskFormComponent_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const type_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", type_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("selected", type_r4.value == ctx_r1.task.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", type_r4.name, " ");
  }
}

function TaskFormComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 3)(1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Crystal value");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function TaskFormComponent_div_13_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r5.task.crystalValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.task.crystalValue)("required", ctx_r2.task.type == ctx_r2.taskTypeEnum.Boss);
  }
}

function TaskFormComponent_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const repeats_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", repeats_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", repeats_r7.name, " ");
  }
}

class TaskFormComponent {
  constructor(router, activatedRoute, store) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.store = store;
    this.taskTypeEnum = src_app_enums_task_type_enum__WEBPACK_IMPORTED_MODULE_2__.TaskType;
    this.taskRepeatsEnum = src_app_enums_task_repeats_enum__WEBPACK_IMPORTED_MODULE_1__.TaskRepeats;
  }

  ngOnInit() {
    var _this = this;

    this.activatedRoute.params.subscribe( /*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
        let id = params["id"];

        if (id) {
          let task$ = _this.store.select((0,src_app_state_tasks_task_selector__WEBPACK_IMPORTED_MODULE_5__.selectTask)(id));

          task$.subscribe(task => {
            _this.task = { ...task
            };
          });
        } else {
          _this.task = new src_app_models_Task__WEBPACK_IMPORTED_MODULE_3__.Task();
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  save() {
    if (this.task._id) {
      this.store.dispatch((0,src_app_state_tasks_task_actions__WEBPACK_IMPORTED_MODULE_4__.updateTask)({
        task: this.task
      }));
    } else {
      this.store.dispatch((0,src_app_state_tasks_task_actions__WEBPACK_IMPORTED_MODULE_4__.addTask)({
        task: this.task
      }));
    }

    this.router.navigate(["tasks"]);
  }

}

TaskFormComponent.ɵfac = function TaskFormComponent_Factory(t) {
  return new (t || TaskFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store));
};

TaskFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: TaskFormComponent,
  selectors: [["app-task-form"]],
  inputs: {
    task: "task"
  },
  decls: 29,
  vars: 12,
  consts: [[1, "container"], [3, "ngSubmit"], ["taskForm", "ngForm"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "placeholder", "Task name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "type"], ["name", "type", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", "selected", 4, "ngFor", "ngForOf"], ["class", "form-group", 4, "ngIf"], ["name", "repeats", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "image"], ["type", "text", "id", "image", "name", "image", "placeholder", "Image path", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "float-right"], ["type", "button", "routerLink", "/tasks", 1, "btn", "btn-secondary"], ["type", "submit", 1, "btn", "btn-success", "ml-2", 3, "disabled"], [3, "value", "selected"], ["for", "crystalValue"], ["type", "number", "id", "crystalValue", "name", "crystalValue", "placeholder", "Crystal value", 1, "form-control", 3, "ngModel", "required", "ngModelChange"], [3, "ngValue"]],
  template: function TaskFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "form", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function TaskFormComponent_Template_form_ngSubmit_1_listener() {
        return ctx.save();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3)(4, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function TaskFormComponent_Template_input_ngModelChange_6_listener($event) {
        return ctx.task.name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 3)(8, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "select", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function TaskFormComponent_Template_select_ngModelChange_10_listener($event) {
        return ctx.task.type = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, TaskFormComponent_option_11_Template, 2, 3, "option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "enumToArray");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, TaskFormComponent_div_13_Template, 4, 2, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 3)(15, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Repeats");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function TaskFormComponent_Template_select_ngModelChange_17_listener($event) {
        return ctx.task.repeats = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, TaskFormComponent_option_18_Template, 2, 2, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "enumToArray");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 3)(21, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Image");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function TaskFormComponent_Template_input_ngModelChange_23_listener($event) {
        return ctx.task.image = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 14)(25, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.task.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.task.type);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 8, ctx.taskTypeEnum));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.task.type == ctx.taskTypeEnum.Boss);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.task.repeats);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](19, 10, ctx.taskRepeatsEnum));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.task.image);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", _r0.form.invalid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _pipes_enum_to_array_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_6__.EnumToArrayPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 6832:
/*!*****************************************************************************!*\
  !*** ./src/app/components/tasks/task-list-item/task-list-item.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskListItemComponent": () => (/* binding */ TaskListItemComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_state_tasks_task_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/state/tasks/task.actions */ 639);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);






const _c0 = ["app-task-list-item", ""];

const _c1 = function (a1) {
  return ["edit", a1];
};

function TaskListItemComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskListItemComponent_div_9_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.delete(ctx_r1.task._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c1, ctx_r0.task._id));
  }
}

class TaskListItemComponent {
  constructor(store) {
    this.store = store;
  }

  ngOnInit() {}

  delete(id) {
    var _this = this;

    return (0,_home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.store.dispatch((0,src_app_state_tasks_task_actions__WEBPACK_IMPORTED_MODULE_1__.deleteTask)({
        id: id
      }));
    })();
  }

}

TaskListItemComponent.ɵfac = function TaskListItemComponent_Factory(t) {
  return new (t || TaskListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store));
};

TaskListItemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TaskListItemComponent,
  selectors: [["", "app-task-list-item", ""]],
  inputs: {
    task: "task"
  },
  attrs: _c0,
  decls: 10,
  vars: 5,
  consts: [[4, "ngIf"], [3, "routerLink"], ["role", "button", 1, "text-danger", 3, "click"]],
  template: function TaskListItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TaskListItemComponent_div_9_Template, 6, 3, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.task.name, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.task.type, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.task.repeats, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.task.default, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.task.default);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrLWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 9759:
/*!*****************************************************!*\
  !*** ./src/app/components/tasks/tasks.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksComponent": () => (/* binding */ TasksComponent)
/* harmony export */ });
/* harmony import */ var src_app_state_tasks_task_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/state/tasks/task.selector */ 801);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loader/loader.component */ 8868);
/* harmony import */ var _task_list_item_task_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-list-item/task-list-item.component */ 6832);








function TasksComponent_table_6_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 7);
  }

  if (rf & 2) {
    const task_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("task", task_r4);
  }
}

function TasksComponent_table_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 5)(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Task ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Repeats ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Default ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, TasksComponent_table_6_tr_14_Template, 1, 1, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 1, ctx_r0.tasks$));
  }
}

function TasksComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-loader", 8);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", "150px");
  }
}

class TasksComponent {
  constructor(store) {
    this.store = store;
    this.tasks$ = this.store.select(src_app_state_tasks_task_selector__WEBPACK_IMPORTED_MODULE_0__.allTasks);
    this.taskStateStatus$ = this.store.select(src_app_state_tasks_task_selector__WEBPACK_IMPORTED_MODULE_0__.selectTaskStateStatus);
  }

  ngOnInit() {}

}

TasksComponent.ɵfac = function TasksComponent_Factory(t) {
  return new (t || TasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
};

TasksComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: TasksComponent,
  selectors: [["app-tasks"]],
  decls: 10,
  vars: 4,
  consts: [[1, "container"], ["routerLink", "new", 1, "btn", "btn-primary", "bottom-right-floating-button"], [1, "d-flex", "mb-3"], ["class", "table table-striped", 4, "ngIf", "ngIfElse"], ["loader", ""], [1, "table", "table-striped"], ["app-task-list-item", "", 3, "task", 4, "ngFor", "ngForOf"], ["app-task-list-item", "", 3, "task"], [3, "size"]],
  template: function TasksComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "New task");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Tasks");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, TasksComponent_table_6_Template, 16, 3, "table", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, TasksComponent_ng_template_8_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 2, ctx.taskStateStatus$) == "success")("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent, _task_list_item_task_list_item_component__WEBPACK_IMPORTED_MODULE_2__.TaskListItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrcy5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 4356:
/*!*****************************************************!*\
  !*** ./src/app/components/toast/toast.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastComponent": () => (/* binding */ ToastComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/toast/toast.service */ 649);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);




function ToastComponent_ngb_toast_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-toast", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("hide", function ToastComponent_ngb_toast_0_Template_ngb_toast_hide_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const toast_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.toastService.remove(toast_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const toast_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", toast_r1.header)("autohide", true)("delay", toast_r1.delay || 5000);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](toast_r1.body);
} }
class ToastComponent {
    constructor(toastService) {
        this.toastService = toastService;
    }
    ngOnInit() {
    }
}
ToastComponent.ɵfac = function ToastComponent_Factory(t) { return new (t || ToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_0__.ToastService)); };
ToastComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ToastComponent, selectors: [["app-toast"]], decls: 1, vars: 1, consts: [[3, "header", "autohide", "delay", "hide", 4, "ngFor", "ngForOf"], [3, "header", "autohide", "delay", "hide"]], template: function ToastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ToastComponent_ngb_toast_0_Template, 2, 4, "ngb-toast", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.toastService.toasts);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbToast], styles: ["[_nghost-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  margin: 0.5em;\n  z-index: 1200;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvYXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJ0b2FzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogMC41ZW07XG4gICAgei1pbmRleDogMTIwMDtcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 7577:
/*!********************************************!*\
  !*** ./src/app/enums/task-repeats.enum.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskRepeats": () => (/* binding */ TaskRepeats)
/* harmony export */ });
var TaskRepeats;
(function (TaskRepeats) {
    TaskRepeats["Daily"] = "DAILY";
    TaskRepeats["Weelky"] = "WEEKLY";
})(TaskRepeats || (TaskRepeats = {}));


/***/ }),

/***/ 6628:
/*!*****************************************!*\
  !*** ./src/app/enums/task-type.enum.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskType": () => (/* binding */ TaskType)
/* harmony export */ });
var TaskType;
(function (TaskType) {
    TaskType["Boss"] = "BOSS";
    TaskType["Quest"] = "QUEST";
})(TaskType || (TaskType = {}));


/***/ }),

/***/ 6924:
/*!************************************************!*\
  !*** ./src/app/guards/authentication.guard.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationGuard": () => (/* binding */ AuthenticationGuard)
/* harmony export */ });
/* harmony import */ var _home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth/auth.service */ 1228);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




class AuthenticationGuard {
  constructor(authService, router, route) {
    this.authService = authService;
    this.router = router;
    this.route = route;
  }

  canActivate(route, state) {
    var _this = this;

    return (0,_home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let code = route.queryParams.code;

      if (code) {
        yield _this.authService.getToken(code);
      }

      let authenticatedUser = yield _this.authService.getAuthenticatedUser();

      if (!authenticatedUser) {
        _this.router.navigate(['login']);

        return false;
      }

      if (code) _this.router.navigate(['/']);
      return true;
    })();
  }

}

AuthenticationGuard.ɵfac = function AuthenticationGuard_Factory(t) {
  return new (t || AuthenticationGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
};

AuthenticationGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AuthenticationGuard,
  factory: AuthenticationGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3926:
/*!*************************************!*\
  !*** ./src/app/models/AuthError.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthError": () => (/* binding */ AuthError)
/* harmony export */ });
class AuthError extends Error {
    constructor(...params) {
        // Pass remaining arguments (including vendor specific ones) to parent constructor
        super(...params);
        this.name = 'AuthError';
    }
}


/***/ }),

/***/ 4080:
/*!*************************************!*\
  !*** ./src/app/models/Character.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Character": () => (/* binding */ Character)
/* harmony export */ });
class Character {
}


/***/ }),

/***/ 1497:
/*!********************************!*\
  !*** ./src/app/models/Task.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
class Task {
}


/***/ }),

/***/ 7900:
/*!***********************************************************!*\
  !*** ./src/app/pipes/enum-to-array/enum-to-array.pipe.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnumToArrayPipe": () => (/* binding */ EnumToArrayPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class EnumToArrayPipe {
    transform(value) {
        return Object.keys(value).map(o => { return { name: o, value: value[o] }; });
    }
}
EnumToArrayPipe.ɵfac = function EnumToArrayPipe_Factory(t) { return new (t || EnumToArrayPipe)(); };
EnumToArrayPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "enumToArray", type: EnumToArrayPipe, pure: true });


/***/ }),

/***/ 4014:
/*!*********************************************!*\
  !*** ./src/app/pipes/filter/filter.pipe.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe": () => (/* binding */ FilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FilterPipe {
    transform(items, filter) {
        if (filter && Array.isArray(items)) {
            let filterKeys = Object.keys(filter);
            return items.filter(item => filterKeys.reduce((memo, keyName) => (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === "", true));
        }
        else {
            return items;
        }
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: true });


/***/ }),

/***/ 201:
/*!*****************************************!*\
  !*** ./src/app/pipes/sort/sort.pipe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortPipe": () => (/* binding */ SortPipe)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class SortPipe {
    transform(value, order, column = '') {
        if (!value || order === '' || !order) {
            return value;
        } // no array
        if (value.length <= 1) {
            return value;
        } // array with only one item
        if (!column || column === '') {
            if (order === 'asc') {
                return value.sort();
            }
            else {
                return value.sort().reverse();
            }
        } // sort 1d array
        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.orderBy)(value, [column], [order]);
    }
}
SortPipe.ɵfac = function SortPipe_Factory(t) { return new (t || SortPipe)(); };
SortPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "sort", type: SortPipe, pure: true });


/***/ }),

/***/ 1228:
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _fetch_fetch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetch/fetch.service */ 4404);






class AuthService {
  constructor(router, fetchService) {
    this.router = router;
    this.fetchService = fetchService;
    this.authenticatedUserChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }

  getAuthenticatedUser() {
    var _this = this;

    return (0,_home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let response = yield _this.fetchService.get(`user`);
      let isOk = response.status == 200;

      if (isOk) {
        _this.authenticatedUser = yield response.json();

        _this.authenticatedUserChanged.emit(_this.authenticatedUser);
      }

      return isOk;
    })();
  }

  getToken(code) {
    var _this2 = this;

    return (0,_home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let body = {
        code: code,
        redirect: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.redirectUrl
      };
      let response = yield _this2.fetchService.post('auth/getToken', body);
      return response && response.status == 200;
    })();
  }

  fetchLoginUrl() {
    var _this3 = this;

    return (0,_home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let response = yield _this3.fetchService.get(`auth/authUrl?redirect=${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.redirectUrl}`);
      let url = yield response.text();
      return url;
    })();
  }

  signIn() {
    var _this4 = this;

    return (0,_home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let url = yield _this4.fetchLoginUrl();
      location.href = url;
    })();
  }

  logout() {
    return (0,_home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      location.href = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiEndpoint + "/auth/logout?redirect=" + location.href;
    })();
  }

}

AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_fetch_fetch_service__WEBPACK_IMPORTED_MODULE_2__.FetchService));
};

AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8695:
/*!*********************************************************!*\
  !*** ./src/app/services/character/character.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharacterService": () => (/* binding */ CharacterService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _fetch_fetch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetch/fetch.service */ 4404);



class CharacterService {
  constructor(fetchService) {
    this.fetchService = fetchService;
  }

  getAll() {
    var _this = this;

    return (0,_home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let response = yield _this.fetchService.get("characters");
      return yield response.json();
    })();
  }

  create(character) {
    var _this2 = this;

    return (0,_home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.fetchService.post("characters", character);
    })();
  }

  update(character) {
    var _this3 = this;

    return (0,_home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.fetchService.put("characters", character);
    })();
  }

  delete(id) {
    var _this4 = this;

    return (0,_home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.fetchService.delete("characters", {
        id: id
      });
    })();
  }

}

CharacterService.ɵfac = function CharacterService_Factory(t) {
  return new (t || CharacterService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_fetch_fetch_service__WEBPACK_IMPORTED_MODULE_1__.FetchService));
};

CharacterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CharacterService,
  factory: CharacterService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3426:
/*!*****************************************************************!*\
  !*** ./src/app/services/error-handler/error-handler.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorHandlerService": () => (/* binding */ ErrorHandlerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_models_AuthError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/AuthError */ 3926);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ 1228);
/* harmony import */ var _toast_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toast/toast.service */ 649);





class ErrorHandlerService {
    constructor(injector) {
        this.injector = injector;
    }
    handleError(error) {
        const toastService = this.injector.get(_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService);
        const authService = this.injector.get(_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService);
        const zone = this.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone);
        zone.run(() => {
            if (error.rejection instanceof src_app_models_AuthError__WEBPACK_IMPORTED_MODULE_0__.AuthError) {
                authService.signIn();
                return;
            }
            toastService.show("ERROR", error.message);
        });
        console.error(error);
    }
}
ErrorHandlerService.ɵfac = function ErrorHandlerService_Factory(t) { return new (t || ErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector)); };
ErrorHandlerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ErrorHandlerService, factory: ErrorHandlerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4404:
/*!*************************************************!*\
  !*** ./src/app/services/fetch/fetch.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchService": () => (/* binding */ FetchService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_models_AuthError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/AuthError */ 3926);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




class FetchService {
  constructor() {
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiEndpoint;
  }

  get(url) {
    var _this = this;

    return (0,_home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this.fetch(`${_this.apiUrl}/${url}`, {
        credentials: 'include'
      });
    })();
  }

  post(url, body) {
    var _this2 = this;

    return (0,_home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this2.sendRequest(url, body, "POST");
    })();
  }

  put(url, body) {
    var _this3 = this;

    return (0,_home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this3.sendRequest(url, body, "PUT");
    })();
  }

  delete(url, body) {
    var _this4 = this;

    return (0,_home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this4.sendRequest(url, body, "DELETE");
    })();
  }

  sendRequest(url, body, method) {
    var _this5 = this;

    return (0,_home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this5.fetch(`${_this5.apiUrl}/${url}`, {
        method: method,
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(body)
      });
    })();
  }

  fetch(url, options) {
    return fetch(url, options).then(this.handleErrors);
  }

  handleErrors(response) {
    return (0,_home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (response.status == 401) {
        throw new src_app_models_AuthError__WEBPACK_IMPORTED_MODULE_1__.AuthError("Authentication error");
      } else if (!response.ok) {
        let text = yield response.text();
        throw new Error(text);
      }

      return response;
    })();
  }

}

FetchService.ɵfac = function FetchService_Factory(t) {
  return new (t || FetchService)();
};

FetchService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: FetchService,
  factory: FetchService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9493:
/*!*************************************************!*\
  !*** ./src/app/services/modal/modal.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalService": () => (/* binding */ ModalService)
/* harmony export */ });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ 3358);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class ModalService {
    constructor() {
        this.modalEvents = new events__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    show(title, content) {
        this.modalEvents.emit("open", { title: title, content: content });
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(); };
ModalService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9218:
/*!***********************************************!*\
  !*** ./src/app/services/task/task.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskService": () => (/* binding */ TaskService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _fetch_fetch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetch/fetch.service */ 4404);



class TaskService {
  constructor(fetchService) {
    this.fetchService = fetchService;
  }

  getTasks() {
    var _this = this;

    return (0,_home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let response = yield _this.fetchService.get(`tasks`);
      return yield response.json();
    })();
  }

  getCompletedTasks() {
    var _this2 = this;

    return (0,_home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let response = yield _this2.fetchService.get(`tasks/completed/${new Date().getTime()}`);
      return yield response.json();
    })();
  }

  changeTaskState(characterId, taskId, completed) {
    var _this3 = this;

    return (0,_home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.fetchService.post('tasks/change-state', {
        taskId: taskId,
        characterId: characterId,
        completed: completed,
        date: new Date().getTime()
      });
    })();
  }

  getTask(id) {
    var _this4 = this;

    return (0,_home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let response = yield _this4.fetchService.get(`tasks/${id}`);
      return yield response.json();
    })();
  }

  create(task) {
    var _this5 = this;

    return (0,_home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this5.fetchService.post('tasks', task);
    })();
  }

  update(task) {
    var _this6 = this;

    return (0,_home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this6.fetchService.put('tasks', task);
    })();
  }

  delete(id) {
    var _this7 = this;

    return (0,_home_runner_work_maple_check_maple_check_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this7.fetchService.delete("tasks", {
        id: id
      });
    })();
  }

}

TaskService.ɵfac = function TaskService_Factory(t) {
  return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_fetch_fetch_service__WEBPACK_IMPORTED_MODULE_1__.FetchService));
};

TaskService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: TaskService,
  factory: TaskService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 649:
/*!*************************************************!*\
  !*** ./src/app/services/toast/toast.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ToastService {
    constructor() {
        this.toasts = [];
    }
    show(header, body) {
        this.toasts.push({ header, body });
    }
    remove(toast) {
        this.toasts = this.toasts.filter(t => t != toast);
    }
}
ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(); };
ToastService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 535:
/*!*******************************************************!*\
  !*** ./src/app/state/characters/character.actions.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCharacter": () => (/* binding */ addCharacter),
/* harmony export */   "apiFailure": () => (/* binding */ apiFailure),
/* harmony export */   "deleteCharacter": () => (/* binding */ deleteCharacter),
/* harmony export */   "hideTask": () => (/* binding */ hideTask),
/* harmony export */   "loadCharacters": () => (/* binding */ loadCharacters),
/* harmony export */   "loadCharactersSuccess": () => (/* binding */ loadCharactersSuccess),
/* harmony export */   "updateCharacter": () => (/* binding */ updateCharacter),
/* harmony export */   "updateTaskPriorities": () => (/* binding */ updateTaskPriorities)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const addCharacter = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Character Page] Add Character', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateCharacter = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Character Page] Update Character', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteCharacter = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Character Page] Delete Character', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadCharacters = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Character API] Load Characters');
const loadCharactersSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Character API] Character Load Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const apiFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Characters API] API Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const hideTask = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Home] hide task', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateTaskPriorities = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Home] update task priorities', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 513:
/*!*******************************************************!*\
  !*** ./src/app/state/characters/character.effects.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharacterEffects": () => (/* binding */ CharacterEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 1745);
/* harmony import */ var _character_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character.actions */ 535);
/* harmony import */ var _character_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character.selector */ 3477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var src_app_services_character_character_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/character/character.service */ 8695);









class CharacterEffects {
    constructor(actions$, store, characterService) {
        this.actions$ = actions$;
        this.store = store;
        this.characterService = characterService;
        // Run this code when a loadCharacters action is dispatched
        this.loadCharacters$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_character_actions__WEBPACK_IMPORTED_MODULE_0__.loadCharacters), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(() => 
        // Call the getCharacters method, convert it to an observable
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(this.characterService.getAll()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((characters) => (0,_character_actions__WEBPACK_IMPORTED_MODULE_0__.loadCharactersSuccess)({ characters: characters })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)((0,_character_actions__WEBPACK_IMPORTED_MODULE_0__.apiFailure)({ error })))))));
        // Run this code when the addCharacter action is dispatched
        this.saveCharacter$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_character_actions__WEBPACK_IMPORTED_MODULE_0__.addCharacter), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(this.characterService.create(action.character)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => (0,_character_actions__WEBPACK_IMPORTED_MODULE_0__.loadCharacters)()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)((0,_character_actions__WEBPACK_IMPORTED_MODULE_0__.apiFailure)({ error })))))));
        // Run this code when the updateCharacter action is dispatched
        this.updateCharacter$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_character_actions__WEBPACK_IMPORTED_MODULE_0__.updateCharacter), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(this.characterService.update(action.character)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => (0,_character_actions__WEBPACK_IMPORTED_MODULE_0__.loadCharacters)()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)((0,_character_actions__WEBPACK_IMPORTED_MODULE_0__.apiFailure)({ error })))))));
        // Run this code when the updateCharacter action is dispatched
        this.deleteCharacter$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_character_actions__WEBPACK_IMPORTED_MODULE_0__.deleteCharacter), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(this.characterService.delete(action.id)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => (0,_character_actions__WEBPACK_IMPORTED_MODULE_0__.loadCharacters)()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)((0,_character_actions__WEBPACK_IMPORTED_MODULE_0__.apiFailure)({ error })))))));
        // Run this code when the hideTask action is dispatched
        this.configurationChanged$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_character_actions__WEBPACK_IMPORTED_MODULE_0__.hideTask, _character_actions__WEBPACK_IMPORTED_MODULE_0__.updateTaskPriorities), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(action).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.withLatestFrom)(this.store.select((0,_character_selector__WEBPACK_IMPORTED_MODULE_1__.selectCharacter)(action.characterId))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(([action, latest]) => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(this.characterService.update(latest)))))), { dispatch: false });
    }
}
CharacterEffects.ɵfac = function CharacterEffects_Factory(t) { return new (t || CharacterEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](src_app_services_character_character_service__WEBPACK_IMPORTED_MODULE_2__.CharacterService)); };
CharacterEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: CharacterEffects, factory: CharacterEffects.ɵfac });


/***/ }),

/***/ 230:
/*!*******************************************************!*\
  !*** ./src/app/state/characters/character.reducer.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "characterReducer": () => (/* binding */ characterReducer),
/* harmony export */   "initialState": () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _character_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character.actions */ 535);


const initialState = {
    characters: [],
    error: null,
    status: 'pending',
};
const characterReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(
// Supply the initial state
initialState, 
// Add the new character to the characters array
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_character_actions__WEBPACK_IMPORTED_MODULE_0__.addCharacter, (state) => ({ ...state, status: 'loading' })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_character_actions__WEBPACK_IMPORTED_MODULE_0__.updateCharacter, (state) => ({ ...state, status: 'loading' })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_character_actions__WEBPACK_IMPORTED_MODULE_0__.deleteCharacter, (state) => ({ ...state, status: 'loading' })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_character_actions__WEBPACK_IMPORTED_MODULE_0__.loadCharacters, (state) => ({ ...state, status: 'loading' })), 
// Handle successfully loaded characters
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_character_actions__WEBPACK_IMPORTED_MODULE_0__.loadCharactersSuccess, (state, { characters }) => ({
    ...state,
    characters: characters,
    error: null,
    status: 'success',
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_character_actions__WEBPACK_IMPORTED_MODULE_0__.apiFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_character_actions__WEBPACK_IMPORTED_MODULE_0__.hideTask, (state, { characterId, taskId, hidden }) => {
    let character = state.characters.find(char => char._id == characterId);
    let characterClone = { ...character };
    characterClone.configuration = { ...character.configuration };
    characterClone.configuration.tasks = [...characterClone.configuration.tasks];
    if (characterClone.configuration.tasks.some(taskConfig => taskConfig.task == taskId)) {
        characterClone.configuration.tasks = characterClone.configuration.tasks.map(taskConfig => taskConfig.task == taskId ? { ...taskConfig, hidden: hidden } : taskConfig);
    }
    else {
        characterClone.configuration.tasks.push({
            hidden: hidden,
            task: taskId,
            priority: null
        });
    }
    return {
        ...state,
        characters: state.characters.map(c => c._id == character._id ? characterClone : c)
    };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_character_actions__WEBPACK_IMPORTED_MODULE_0__.updateTaskPriorities, (state, { characterId, tasks }) => {
    let character = state.characters.find(char => char._id == characterId);
    let characterClone = { ...character };
    characterClone.configuration = { ...character.configuration };
    characterClone.configuration.tasks = [...characterClone.configuration.tasks];
    tasks.map((task, newPriority) => {
        if (characterClone.configuration.tasks.some(config => config.task == task._id)) {
            characterClone.configuration.tasks = characterClone.configuration.tasks.map(config => config.task == task._id ? { ...config, priority: newPriority } : config);
        }
        else {
            characterClone.configuration.tasks.push({
                hidden: false,
                task: task._id,
                priority: newPriority
            });
        }
    });
    return {
        ...state,
        characters: state.characters.map(c => c._id == character._id ? characterClone : c)
    };
}));


/***/ }),

/***/ 3477:
/*!********************************************************!*\
  !*** ./src/app/state/characters/character.selector.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "charactersStateSelector": () => (/* binding */ charactersStateSelector),
/* harmony export */   "selectAllCharacters": () => (/* binding */ selectAllCharacters),
/* harmony export */   "selectCharacter": () => (/* binding */ selectCharacter),
/* harmony export */   "selectCharacterStateStatus": () => (/* binding */ selectCharacterStateStatus)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const charactersStateSelector = (state) => state.characters;
const selectAllCharacters = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(charactersStateSelector, (state) => state.characters);
const selectCharacter = (id) => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(charactersStateSelector, (state) => state.characters.find(character => character._id == id));
const selectCharacterStateStatus = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(charactersStateSelector, (state) => state.status);


/***/ }),

/***/ 8321:
/*!****************************************************************!*\
  !*** ./src/app/state/completedTasks/completed-task.actions.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadCompletedTasks": () => (/* binding */ loadCompletedTasks),
/* harmony export */   "loadCompletedTasksFailure": () => (/* binding */ loadCompletedTasksFailure),
/* harmony export */   "loadCompletedTasksSuccess": () => (/* binding */ loadCompletedTasksSuccess),
/* harmony export */   "setComplete": () => (/* binding */ setComplete),
/* harmony export */   "setIncomplete": () => (/* binding */ setIncomplete)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const setComplete = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Completed Task] Set complete', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setIncomplete = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Completed Task] Set incomplete', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadCompletedTasks = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Completed Task API] Load');
const loadCompletedTasksSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Completed Task API] Load success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadCompletedTasksFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Completed Task API] Load failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 6326:
/*!****************************************************************!*\
  !*** ./src/app/state/completedTasks/completed-task.reducer.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "completedTaskReducer": () => (/* binding */ completedTaskReducer),
/* harmony export */   "initialState": () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _completed_task_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./completed-task.actions */ 8321);


const initialState = {
    completedTasks: [],
    error: null,
    status: 'pending',
};
const completedTaskReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_completed_task_actions__WEBPACK_IMPORTED_MODULE_0__.setComplete, (state, { characterId, taskId }) => {
    let completedTask = {
        _id: "",
        task: taskId,
        character: characterId,
        date: new Date()
    };
    return {
        ...state,
        completedTasks: [...state.completedTasks, completedTask],
    };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_completed_task_actions__WEBPACK_IMPORTED_MODULE_0__.setIncomplete, (state, { characterId, taskId }) => ({
    ...state,
    completedTasks: state.completedTasks.filter(ct => !(ct.character == characterId && ct.task == taskId))
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_completed_task_actions__WEBPACK_IMPORTED_MODULE_0__.loadCompletedTasks, (state) => ({ ...state, status: 'loading' })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_completed_task_actions__WEBPACK_IMPORTED_MODULE_0__.loadCompletedTasksSuccess, (state, { completedTasks }) => ({
    ...state,
    completedTasks: completedTasks,
    error: null,
    status: 'success',
})), 
//TODO: make default handler?
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_completed_task_actions__WEBPACK_IMPORTED_MODULE_0__.loadCompletedTasksFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
})));


/***/ }),

/***/ 959:
/*!*****************************************************************!*\
  !*** ./src/app/state/completedTasks/completed-task.selector.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "completedTasksStateSelector": () => (/* binding */ completedTasksStateSelector),
/* harmony export */   "selectCharacterCompletedTasks": () => (/* binding */ selectCharacterCompletedTasks),
/* harmony export */   "selectCompletedTaskStateStatus": () => (/* binding */ selectCompletedTaskStateStatus)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const completedTasksStateSelector = (state) => state.completedTasks;
const selectCharacterCompletedTasks = (characterId) => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(completedTasksStateSelector, (state) => {
    return state.completedTasks.filter(ct => ct.character == characterId);
});
const selectCompletedTaskStateStatus = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(completedTasksStateSelector, (state) => state.status);


/***/ }),

/***/ 5238:
/*!*****************************************************************!*\
  !*** ./src/app/state/completedTasks/completed-tasks.effects.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompletedTaskEffects": () => (/* binding */ CompletedTaskEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _completed_task_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./completed-task.actions */ 8321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var src_app_services_task_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/task/task.service */ 9218);








class CompletedTaskEffects {
    constructor(actions$, store, taskService) {
        this.actions$ = actions$;
        this.store = store;
        this.taskService = taskService;
        this.setIncomplete$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_completed_task_actions__WEBPACK_IMPORTED_MODULE_0__.setIncomplete), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((action) => this.taskService.changeTaskState(action.characterId, action.taskId, false))), {
            dispatch: false
        });
        this.setComplete$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_completed_task_actions__WEBPACK_IMPORTED_MODULE_0__.setComplete), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((action) => this.taskService.changeTaskState(action.characterId, action.taskId, true))), {
            dispatch: false
        });
        this.loadCompletedTasks$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_completed_task_actions__WEBPACK_IMPORTED_MODULE_0__.loadCompletedTasks), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(this.taskService.getCompletedTasks()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((completedTasks) => (0,_completed_task_actions__WEBPACK_IMPORTED_MODULE_0__.loadCompletedTasksSuccess)({ completedTasks })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_completed_task_actions__WEBPACK_IMPORTED_MODULE_0__.loadCompletedTasksFailure)({ error })))))));
    }
}
CompletedTaskEffects.ɵfac = function CompletedTaskEffects_Factory(t) { return new (t || CompletedTaskEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](src_app_services_task_task_service__WEBPACK_IMPORTED_MODULE_1__.TaskService)); };
CompletedTaskEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: CompletedTaskEffects, factory: CompletedTaskEffects.ɵfac });


/***/ }),

/***/ 639:
/*!*********************************************!*\
  !*** ./src/app/state/tasks/task.actions.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "apiFailure": () => (/* binding */ apiFailure),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "loadTasks": () => (/* binding */ loadTasks),
/* harmony export */   "loadTasksSuccess": () => (/* binding */ loadTasksSuccess),
/* harmony export */   "updateTask": () => (/* binding */ updateTask)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

//TODO: Export single object
const addTask = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Task Page] Add Task', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateTask = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Task Page] Update Task', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteTask = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Task Page] Delete Task', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadTasks = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Task Page] Load Tasks');
const loadTasksSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Task API] Task Load Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const apiFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Tasks API] Tasks API Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 5855:
/*!*********************************************!*\
  !*** ./src/app/state/tasks/task.effects.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskEffects": () => (/* binding */ TaskEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _task_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.actions */ 639);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var src_app_services_task_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/task/task.service */ 9218);








class TaskEffects {
    constructor(actions$, store, taskService) {
        this.actions$ = actions$;
        this.store = store;
        this.taskService = taskService;
        this.loadTasks$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_task_actions__WEBPACK_IMPORTED_MODULE_0__.loadTasks), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(this.taskService.getTasks()).pipe(
        // Take the returned value and return a new success action containing the characters
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((tasks) => (0,_task_actions__WEBPACK_IMPORTED_MODULE_0__.loadTasksSuccess)({ tasks: tasks })), 
        // Or... if it errors return a new failure action containing the error
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_task_actions__WEBPACK_IMPORTED_MODULE_0__.apiFailure)({ error })))))));
        this.saveTask$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_task_actions__WEBPACK_IMPORTED_MODULE_0__.addTask), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(action => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(this.taskService.create(action.task)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => (0,_task_actions__WEBPACK_IMPORTED_MODULE_0__.loadTasks)()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_task_actions__WEBPACK_IMPORTED_MODULE_0__.apiFailure)({ error })))))));
        this.updateTask$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_task_actions__WEBPACK_IMPORTED_MODULE_0__.updateTask), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(action => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(this.taskService.update(action.task)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => (0,_task_actions__WEBPACK_IMPORTED_MODULE_0__.loadTasks)()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_task_actions__WEBPACK_IMPORTED_MODULE_0__.apiFailure)({ error })))))));
        this.deleteTask$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_task_actions__WEBPACK_IMPORTED_MODULE_0__.deleteTask), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(action => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(this.taskService.delete(action.id)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => (0,_task_actions__WEBPACK_IMPORTED_MODULE_0__.loadTasks)()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_task_actions__WEBPACK_IMPORTED_MODULE_0__.apiFailure)({ error })))))));
    }
}
TaskEffects.ɵfac = function TaskEffects_Factory(t) { return new (t || TaskEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](src_app_services_task_task_service__WEBPACK_IMPORTED_MODULE_1__.TaskService)); };
TaskEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: TaskEffects, factory: TaskEffects.ɵfac });


/***/ }),

/***/ 1194:
/*!*********************************************!*\
  !*** ./src/app/state/tasks/task.reducer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "taskReducer": () => (/* binding */ taskReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _task_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.actions */ 639);


const initialState = {
    tasks: [],
    error: null,
    status: 'pending',
};
const taskReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(
// Supply the initial state
initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_task_actions__WEBPACK_IMPORTED_MODULE_0__.addTask, (state) => ({ ...state, status: 'loading' })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_task_actions__WEBPACK_IMPORTED_MODULE_0__.updateTask, (state) => ({ ...state, status: 'loading' })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_task_actions__WEBPACK_IMPORTED_MODULE_0__.deleteTask, (state) => ({ ...state, status: 'loading' })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_task_actions__WEBPACK_IMPORTED_MODULE_0__.loadTasks, (state) => ({ ...state, status: 'loading' })), 
// Handle successfully loaded tasks
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_task_actions__WEBPACK_IMPORTED_MODULE_0__.loadTasksSuccess, (state, { tasks }) => ({
    ...state,
    tasks: tasks,
    error: null,
    status: 'success',
})), 
// Handle tasks load failure
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_task_actions__WEBPACK_IMPORTED_MODULE_0__.apiFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
})));


/***/ }),

/***/ 801:
/*!**********************************************!*\
  !*** ./src/app/state/tasks/task.selector.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allTasks": () => (/* binding */ allTasks),
/* harmony export */   "selectCharacterTasks": () => (/* binding */ selectCharacterTasks),
/* harmony export */   "selectTask": () => (/* binding */ selectTask),
/* harmony export */   "selectTaskStateStatus": () => (/* binding */ selectTaskStateStatus),
/* harmony export */   "tasksStateSelector": () => (/* binding */ tasksStateSelector)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _characters_character_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../characters/character.selector */ 3477);
/* harmony import */ var _completedTasks_completed_task_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../completedTasks/completed-task.selector */ 959);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);




const tasksStateSelector = (state) => state.tasks;
const allTasks = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(tasksStateSelector, (state) => state.tasks);
const selectCharacterTasks = (characterId, type, repeats) => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(tasksStateSelector, (0,_completedTasks_completed_task_selector__WEBPACK_IMPORTED_MODULE_1__.selectCharacterCompletedTasks)(characterId), (0,_characters_character_selector__WEBPACK_IMPORTED_MODULE_0__.selectCharacter)(characterId), (state, completedTasks, character) => {
    let tasks = state.tasks
        .filter(task => task.type == type && task.repeats == repeats)
        .map(task => {
        task = { ...task };
        task.hidden = character?.configuration?.tasks.some(t => t.task == task._id && t.hidden);
        task.priority = character?.configuration?.tasks.find(t => t.task == task._id)?.priority;
        task.complete = completedTasks?.some(completed => completed.task == task._id);
        return task;
    });
    //Order by priority
    return lodash__WEBPACK_IMPORTED_MODULE_2__.orderBy(tasks, ['priority'], ['asc']);
    ;
});
const selectTask = (id) => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(tasksStateSelector, (state) => state.tasks.find(task => task._id == id));
const selectTaskStateStatus = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(tasksStateSelector, (state) => state.status);


/***/ }),

/***/ 8201:
/*!**************************************************!*\
  !*** ./src/app/submodules/app.routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/home/home.component */ 8263);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/login/login.component */ 7143);
/* harmony import */ var _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../guards/authentication.guard */ 6924);
/* harmony import */ var _components_application_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/application.component */ 3686);
/* harmony import */ var _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/tasks/tasks.component */ 9759);
/* harmony import */ var _components_characters_characters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/characters/characters.component */ 5671);
/* harmony import */ var _components_tasks_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/tasks/task-form/task-form.component */ 9254);
/* harmony import */ var _components_characters_character_form_character_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/characters/character-form/character-form.component */ 9123);
/* harmony import */ var _components_home_character_tasks_character_tasks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/home/character-tasks/character-tasks.component */ 6697);
/* harmony import */ var _components_leveling_leveling_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/leveling/leveling.component */ 2093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);













const routes = [
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
    },
    {
        path: '',
        canActivate: [_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__.AuthenticationGuard],
        component: _components_application_component__WEBPACK_IMPORTED_MODULE_3__.ApplicationComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
                children: [
                    {
                        path: ':id',
                        component: _components_home_character_tasks_character_tasks_component__WEBPACK_IMPORTED_MODULE_8__.CharacterTasksComponent
                    },
                    {
                        path: '',
                        pathMatch: "full",
                        component: _components_home_character_tasks_character_tasks_component__WEBPACK_IMPORTED_MODULE_8__.CharacterTasksComponent
                    }
                ]
            },
            {
                path: 'tasks',
                children: [
                    {
                        path: 'new',
                        component: _components_tasks_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_6__.TaskFormComponent
                    },
                    {
                        path: 'edit/:id',
                        component: _components_tasks_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_6__.TaskFormComponent
                    },
                    {
                        path: '',
                        component: _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__.TasksComponent
                    }
                ]
            },
            {
                path: 'characters',
                children: [
                    {
                        path: 'new',
                        component: _components_characters_character_form_character_form_component__WEBPACK_IMPORTED_MODULE_7__.CharacterFormComponent
                    },
                    {
                        path: 'edit/:id',
                        component: _components_characters_character_form_character_form_component__WEBPACK_IMPORTED_MODULE_7__.CharacterFormComponent
                    },
                    {
                        path: '',
                        component: _components_characters_characters_component__WEBPACK_IMPORTED_MODULE_5__.CharactersComponent
                    }
                ]
            },
            {
                path: 'leveling',
                component: _components_leveling_leveling_component__WEBPACK_IMPORTED_MODULE_9__.LevelingComponent
            }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiEndpoint: 'https://maple-check-api-staging.herokuapp.com',
    redirectUrl: 'https://giuzus.github.io/maple-check-staging'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map