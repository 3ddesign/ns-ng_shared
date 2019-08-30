"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("nativescript-angular/forms");
var challenge_edit_component_1 = require("./challenge-edit.component");
var shared_module_1 = require("~/app/shared/shared.module");
var ChallengeEditModule = /** @class */ (function () {
    function ChallengeEditModule() {
    }
    ChallengeEditModule = __decorate([
        core_1.NgModule({
            declarations: [challenge_edit_component_1.ChallengeEditComponent],
            imports: [
                common_1.NativeScriptCommonModule,
                forms_1.NativeScriptFormsModule,
                // NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forChild([
                    { path: '', component: challenge_edit_component_1.ChallengeEditComponent }
                ]),
                shared_module_1.SharedModule
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], ChallengeEditModule);
    return ChallengeEditModule;
}());
exports.ChallengeEditModule = ChallengeEditModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlLWVkaXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhbGxlbmdlLWVkaXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSxzREFBdUU7QUFDdkUsb0RBQXFFO0FBRXJFLHVFQUFvRTtBQUNwRSw0REFBMEQ7QUFlMUQ7SUFBQTtJQUFrQyxDQUFDO0lBQXRCLG1CQUFtQjtRQWIvQixlQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyxpREFBc0IsQ0FBQztZQUN0QyxPQUFPLEVBQUU7Z0JBQ1AsaUNBQXdCO2dCQUN4QiwrQkFBdUI7Z0JBQ3ZCLDRCQUE0QjtnQkFDNUIsaUNBQXdCLENBQUMsUUFBUSxDQUFDO29CQUNoQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGlEQUFzQixFQUFFO2lCQUNoRCxDQUFDO2dCQUNGLDRCQUFZO2FBQ2I7WUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csbUJBQW1CLENBQUc7SUFBRCwwQkFBQztDQUFBLEFBQW5DLElBQW1DO0FBQXRCLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBDaGFsbGVuZ2VFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtDaGFsbGVuZ2VFZGl0Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAvLyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogQ2hhbGxlbmdlRWRpdENvbXBvbmVudCB9XG4gICAgXSksXG4gICAgU2hhcmVkTW9kdWxlXG4gIF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBDaGFsbGVuZ2VFZGl0TW9kdWxlIHt9XG4iXX0=