"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var operators_1 = require("rxjs/operators");
var challenge_service_1 = require("../challenge.service");
var ChallengeEditComponent = /** @class */ (function () {
    function ChallengeEditComponent(activatedRoute, pageRoute, router, challengeService) {
        this.activatedRoute = activatedRoute;
        this.pageRoute = pageRoute;
        this.router = router;
        this.challengeService = challengeService;
        this.isCreating = true;
        this.title = '';
        this.description = '';
    }
    ChallengeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.activatedRoute.paramMap.subscribe(paramMap => {
        //   console.log(paramMap.get('mode'));
        // });
        this.pageRoute.activatedRoute.subscribe(function (activatedRoute) {
            activatedRoute.paramMap.subscribe(function (paramMap) {
                if (!paramMap.has('mode')) {
                    _this.isCreating = true;
                }
                else {
                    _this.isCreating = paramMap.get('mode') !== 'edit';
                }
                if (!_this.isCreating) {
                    _this.challengeService.currentChallenge
                        .pipe(operators_1.take(1))
                        .subscribe(function (challenge) {
                        _this.title = challenge.title;
                        _this.description = challenge.description;
                    });
                }
            });
        });
    };
    ChallengeEditComponent.prototype.onSubmit = function (title, description) {
        // ...
        if (this.isCreating) {
            this.challengeService.createNewChallenge(title, description);
        }
        else {
            this.challengeService.updateChallenge(title, description);
        }
        this.router.backToPreviousPage();
    };
    ChallengeEditComponent = __decorate([
        core_1.Component({
            selector: 'ns-challenge-edit',
            templateUrl: './challenge-edit.component.html',
            styleUrls: ['./challenge-edit.component.scss'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_2.PageRoute,
            router_2.RouterExtensions,
            challenge_service_1.ChallengeService])
    ], ChallengeEditComponent);
    return ChallengeEditComponent;
}());
exports.ChallengeEditComponent = ChallengeEditComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCxzREFBMEU7QUFDMUUsNENBQXNDO0FBRXRDLDBEQUF3RDtBQVF4RDtJQUtFLGdDQUNVLGNBQThCLEVBQzlCLFNBQW9CLEVBQ3BCLE1BQXdCLEVBQ3hCLGdCQUFrQztRQUhsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBUjVDLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGdCQUFXLEdBQUcsRUFBRSxDQUFDO0lBT2QsQ0FBQztJQUVKLHlDQUFRLEdBQVI7UUFBQSxpQkFzQkM7UUFyQkMsdURBQXVEO1FBQ3ZELHVDQUF1QztRQUN2QyxNQUFNO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFVBQUEsY0FBYztZQUNwRCxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFBLFFBQVE7Z0JBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUN6QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztpQkFDeEI7cUJBQU07b0JBQ0wsS0FBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLE1BQU0sQ0FBQztpQkFDbkQ7Z0JBRUQsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ3BCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7eUJBQ25DLElBQUksQ0FBQyxnQkFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUNiLFNBQVMsQ0FBQyxVQUFBLFNBQVM7d0JBQ2xCLEtBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQzt3QkFDN0IsS0FBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDO29CQUMzQyxDQUFDLENBQUMsQ0FBQztpQkFDTjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQseUNBQVEsR0FBUixVQUFTLEtBQWEsRUFBRSxXQUFtQjtRQUN6QyxNQUFNO1FBQ04sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDOUQ7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQzNEO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUE1Q1Usc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7WUFDOUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBTzBCLHVCQUFjO1lBQ25CLGtCQUFTO1lBQ1oseUJBQWdCO1lBQ04sb0NBQWdCO09BVGpDLHNCQUFzQixDQTZDbEM7SUFBRCw2QkFBQztDQUFBLEFBN0NELElBNkNDO0FBN0NZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlUm91dGUsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ2hhbGxlbmdlU2VydmljZSB9IGZyb20gJy4uL2NoYWxsZW5nZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtY2hhbGxlbmdlLWVkaXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQuc2NzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIENoYWxsZW5nZUVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpc0NyZWF0aW5nID0gdHJ1ZTtcbiAgdGl0bGUgPSAnJztcbiAgZGVzY3JpcHRpb24gPSAnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHByaXZhdGUgY2hhbGxlbmdlU2VydmljZTogQ2hhbGxlbmdlU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbU1hcC5zdWJzY3JpYmUocGFyYW1NYXAgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2cocGFyYW1NYXAuZ2V0KCdtb2RlJykpO1xuICAgIC8vIH0pO1xuICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlLnN1YnNjcmliZShhY3RpdmF0ZWRSb3V0ZSA9PiB7XG4gICAgICBhY3RpdmF0ZWRSb3V0ZS5wYXJhbU1hcC5zdWJzY3JpYmUocGFyYW1NYXAgPT4ge1xuICAgICAgICBpZiAoIXBhcmFtTWFwLmhhcygnbW9kZScpKSB7XG4gICAgICAgICAgdGhpcy5pc0NyZWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmlzQ3JlYXRpbmcgPSBwYXJhbU1hcC5nZXQoJ21vZGUnKSAhPT0gJ2VkaXQnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzQ3JlYXRpbmcpIHtcbiAgICAgICAgICB0aGlzLmNoYWxsZW5nZVNlcnZpY2UuY3VycmVudENoYWxsZW5nZVxuICAgICAgICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoY2hhbGxlbmdlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IGNoYWxsZW5nZS50aXRsZTtcbiAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGNoYWxsZW5nZS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uU3VibWl0KHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcpIHtcbiAgICAvLyAuLi5cbiAgICBpZiAodGhpcy5pc0NyZWF0aW5nKSB7XG4gICAgICB0aGlzLmNoYWxsZW5nZVNlcnZpY2UuY3JlYXRlTmV3Q2hhbGxlbmdlKHRpdGxlLCBkZXNjcmlwdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhbGxlbmdlU2VydmljZS51cGRhdGVDaGFsbGVuZ2UodGl0bGUsIGRlc2NyaXB0aW9uKTtcbiAgICB9XG4gICAgdGhpcy5yb3V0ZXIuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gIH1cbn1cbiJdfQ==