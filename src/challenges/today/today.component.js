"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var challenge_service_1 = require("../challenge.service");
var day_model_1 = require("../day.model");
var TodayComponent = /** @class */ (function () {
    function TodayComponent(challengeService) {
        this.challengeService = challengeService;
    }
    TodayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.curChallengeSub = this.challengeService.currentChallenge.subscribe(function (challenge) {
            if (challenge) {
                _this.currentDay = challenge.currentDay;
            }
        });
    };
    TodayComponent.prototype.onActionSelected = function (action) {
        this.challengeService.updateDayStatus(this.currentDay.dayInMonth, action);
    };
    TodayComponent.prototype.getActionName = function () {
        if (this.currentDay.status === day_model_1.DayStatus.Completed) {
            return 'complete';
        }
        if (this.currentDay.status === day_model_1.DayStatus.Failed) {
            return 'fail';
        }
        return null;
    };
    TodayComponent.prototype.ngOnDestroy = function () {
        if (this.curChallengeSub) {
            this.curChallengeSub.unsubscribe();
        }
    };
    TodayComponent = __decorate([
        core_1.Component({
            selector: 'ns-today',
            templateUrl: './today.component.html',
            styleUrls: ['./today.component.scss'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [challenge_service_1.ChallengeService])
    ], TodayComponent);
    return TodayComponent;
}());
exports.TodayComponent = TodayComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kYXkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9kYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBRzdELDBEQUF3RDtBQUN4RCwwQ0FBOEM7QUFROUM7SUFJRSx3QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBRyxDQUFDO0lBRTFELGlDQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FDckUsVUFBQSxTQUFTO1lBQ1AsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsS0FBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDO2FBQ3hDO1FBQ0gsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQseUNBQWdCLEdBQWhCLFVBQWlCLE1BQWlCO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELHNDQUFhLEdBQWI7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLHFCQUFTLENBQUMsU0FBUyxFQUFFO1lBQ2xELE9BQU8sVUFBVSxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxxQkFBUyxDQUFDLE1BQU0sRUFBRTtZQUMvQyxPQUFPLE1BQU0sQ0FBQztTQUNmO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQWxDVSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1lBQ3JDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQUtzQyxvQ0FBZ0I7T0FKM0MsY0FBYyxDQW1DMUI7SUFBRCxxQkFBQztDQUFBLEFBbkNELElBbUNDO0FBbkNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENoYWxsZW5nZVNlcnZpY2UgfSBmcm9tICcuLi9jaGFsbGVuZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBEYXksIERheVN0YXR1cyB9IGZyb20gJy4uL2RheS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLXRvZGF5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvZGF5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9kYXkuY29tcG9uZW50LnNjc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBUb2RheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY3VycmVudERheTogRGF5O1xuICBwcml2YXRlIGN1ckNoYWxsZW5nZVN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbGxlbmdlU2VydmljZTogQ2hhbGxlbmdlU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmN1ckNoYWxsZW5nZVN1YiA9IHRoaXMuY2hhbGxlbmdlU2VydmljZS5jdXJyZW50Q2hhbGxlbmdlLnN1YnNjcmliZShcbiAgICAgIGNoYWxsZW5nZSA9PiB7XG4gICAgICAgIGlmIChjaGFsbGVuZ2UpIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnREYXkgPSBjaGFsbGVuZ2UuY3VycmVudERheTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBvbkFjdGlvblNlbGVjdGVkKGFjdGlvbjogRGF5U3RhdHVzKSB7XG4gICAgdGhpcy5jaGFsbGVuZ2VTZXJ2aWNlLnVwZGF0ZURheVN0YXR1cyh0aGlzLmN1cnJlbnREYXkuZGF5SW5Nb250aCwgYWN0aW9uKTtcbiAgfVxuXG4gIGdldEFjdGlvbk5hbWUoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudERheS5zdGF0dXMgPT09IERheVN0YXR1cy5Db21wbGV0ZWQpIHtcbiAgICAgIHJldHVybiAnY29tcGxldGUnO1xuICAgIH1cbiAgICBpZiAodGhpcy5jdXJyZW50RGF5LnN0YXR1cyA9PT0gRGF5U3RhdHVzLkZhaWxlZCkge1xuICAgICAgcmV0dXJuICdmYWlsJztcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5jdXJDaGFsbGVuZ2VTdWIpIHtcbiAgICAgIHRoaXMuY3VyQ2hhbGxlbmdlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=